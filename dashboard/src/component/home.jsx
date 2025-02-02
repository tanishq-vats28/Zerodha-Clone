import React, { useEffect, useState } from "react";
import Topbar from "./topbar";
import Dashboard from "./dashboard";
import axios from "axios";

function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const urlToken = queryParams.get("token");
    console.log("Dashboard token", urlToken);
    if (urlToken) {
      localStorage.setItem("token", urlToken);
      window.history.replaceState({}, document.title, window.location.pathname);
      setIsAuthenticated(true);
    } else {
      const storedToken = localStorage.getItem("token");
      if (!storedToken) {
        console.log("Stored token", storedToken);
        // window.location.href =
        //   "https://extraordinary-stroopwafel-ebc42d.netlify.app/";
      }
      setIsAuthenticated(true);
    }
  }, []);

  // Example authenticated request
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://zerodha-clone-6u0t.onrender.com/user/protected",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // Handle response
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Topbar />
      <Dashboard />
    </div>
  );
}

export default Home;
