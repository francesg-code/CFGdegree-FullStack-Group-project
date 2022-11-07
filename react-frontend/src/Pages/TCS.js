import logo from "../Layout/Logo/HBA_logo.svg";
import "./HomePage/App.css";
import { Link } from "react-router-dom";
import FooterLinks from "../Layout/Footer/Footer";

function TermsConditions() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Terms and Conditions</h1>
      <p>
        This is a small hobby site and the following terms and conditions apply.
      </p>
      <p>
        1. This site is not a substitute for medical care and all information that is provided by the site
        is used at the user's own risk. <br></br>
        2. This site is still in the development stage and is not for public use. <br></br>
        3. Any information that is provided from a third party is not the responsibility of Happy Bodies 
        Anywhere. <br></br>
        4. Any information that you choose to submit, is done at the user's own risk.
      </p>
      <div className="App-footer">
        <FooterLinks/>
      </div>
    </div>
  );
}

export default TermsConditions;