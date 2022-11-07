import logo from "../Layout/Logo/HBA_logo.svg";
import "./HomePage/App.css";
import { Link } from "react-router-dom";
import FooterLinks from "../Layout/Footer/Footer";

function Privacy() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Privacy Policy</h1>
      <p>This is a small hobby project that is still under development. The site is not intended for 
        public use and any data that is submitted is at the user's own risk and may be used in the 
        development process. No data will be shared with any third parties and we will never use it to 
        contact you.
      </p>
      <div className="App-footer">
        <FooterLinks/>
      </div>
    </div>
  );
}

export default Privacy;
