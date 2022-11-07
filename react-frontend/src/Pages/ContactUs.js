import logo from "../Layout/Logo/HBA_logo.svg";
import "./HomePage/App.css";
import { Link } from "react-router-dom";
import FooterLinks from "../Layout/Footer/Footer";

function ContactUs() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Contact Us</h1>
      <p>
        This is small project and the start of our coding journey. If you would like to give feedback 
        please contact us through Github.
      </p>
      <p>
        Alternatively if you would like more information on how to get involved in your own project or 
        about the opportunties available to learn and make you own project, 
        visit: <a href="https://codefirstgirls.com">CodeFirstGirls</a>.
      </p>
      <div className="App-footer">
        <FooterLinks/>
      </div>
    </div>
  );
}

export default ContactUs;
