import React, { useEffect, useState } from "react";
import Topbar from "./topbar";
import Dashboard from "./dashboard";
import axios from "axios";

function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuthenticated(true);
    } else {
      const fetchToken = async () => {
        try {
          const { data } = await axios.get(
            "https://zerodha-clone-6u0t.onrender.com/user/token",
            {
              withCredentials: true,
            }
          );

          if (data.token) {
            localStorage.setItem("token", data.token);
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
            window.location.href = "http://localhost:5173/";
          }
        } catch (error) {
          console.error("Error fetching token:", error);
          setIsAuthenticated(false);
          window.location.href = "http://localhost:5173/";
        }
      };

      fetchToken();
    }
  }, []);

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
