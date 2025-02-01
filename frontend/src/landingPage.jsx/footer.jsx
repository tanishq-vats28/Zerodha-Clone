import React from "react";
import "./css/footer.css";
function Footer() {
  return (
    <footer className="foot">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <img
              src="media/images/logo.svg"
              alt="logo"
              className="img-fluid"
              style={{ width: "50%" }}
            />
            <p className="fs-7 mt-3">
              &copy; 2010 - 2024, Zerodha Broking Ltd.
            </p>
            <p className="mt-3">
              <i className="fa-brands fa-x-twitter"></i>&nbsp;
              <i className="fa-brands fa-square-facebook"></i>&nbsp;
              <i className="fa-brands fa-instagram"></i>&nbsp;
              <i className="fa-brands fa-linkedin"></i>
            </p>
            <hr />
            <p>
              <i className="fa-brands fa-youtube"></i>&nbsp;
              <i className="fa-brands fa-whatsapp"></i>&nbsp;
              <i className="fa-brands fa-telegram"></i>
            </p>
          </div>
          <div className="col text-center">
            <h5>Company</h5>
            <p>
              <a href="">About</a>
            </p>
            <p>
              <a href="">Products</a>
            </p>
            <p>
              <a href="">Pricing</a>
            </p>
            <p>
              <a href="">Referral programme</a>
            </p>
            <p>
              <a href="">Careers</a>
            </p>
            <p>
              <a href="">Zerodha.tech</a>
            </p>
            <p>
              <a href="">Press & media</a>
            </p>
            <p>
              <a href="">Zerodha Cares (CSR)</a>
            </p>
          </div>
          <div className="col text-center">
            <h5>Support</h5>
            <p>
              <a href="">Contact us</a>
            </p>
            <p>
              <a href="">Support portal</a>
            </p>
            <p>
              <a href="">Z-Connect blog</a>
            </p>
            <p>
              <a href="">List of charges</a>
            </p>
            <p>
              <a href="">Downloads & resources</a>
            </p>
            <p>
              <a href="">Videos</a>
            </p>
            <p>
              <a href="">Market overview</a>
            </p>
            <p>
              <a href="">How to file a complaint?</a>
            </p>
            <p>
              <a href="">Status of your complaints</a>
            </p>
          </div>
          <div className="col text-center">
            <h5>Account</h5>
            <p>
              <a href="">Open an account</a>
            </p>
            <p>
              <a href="">Fund transfer</a>
            </p>
          </div>
        </div>
        <div className="footer-txt">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
          <div className="firm-policy">
            <a href="">NSE</a>
            <a href="">BSE</a>
            <a href="">MCX</a>
            <a href="">Terms & conditions</a>
            <a href="">Polcies & procedures</a>
            <a href="">Priacy policy</a>
            <a href="">Dislosure</a>
            <a href="">Forinvestor's attention</a>
            <a href="">Invstor charter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
