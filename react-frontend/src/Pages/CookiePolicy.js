import logo from "../Layout/Logo/HBA_logo.svg";
import "./HomePage/App.css";
import { Link } from "react-router-dom";
import FooterLinks from "../Layout/Footer/Footer";

function Cookies() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Our Cookies Policy</h1>
      <p>
        No cookies here! This is a small hobby website and we don't use any cookies. We do strongly recommend
        that you go and find some low sugar ones to eat though.
      </p>
      <div className="App-footer">
        <FooterLinks/>
      </div>
    </div>
  );
}

export default Cookies;