import logo from "../../Layout/Logo/HBA_logo.svg";
import "../HomePage/App.css";
import { Link } from "react-router-dom";
import FooterLinks from "../../Layout/Footer/Footer";
import ReadingCarousel from "./ReadingCarousel";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPlayer from "react-player";

function Reading() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="ReadingCarousel">
        <h2>For more information, we recommend these sites.</h2>
        <ReadingCarousel></ReadingCarousel>
      </div>
     <div className="IframeTitle">
        <h2>Need to know how to test your blood? Here's how:</h2>
        </div>
      <div
        className="ReactPlayer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ReactPlayer url="https://www.youtube.com/watch?v=NUskHl7APHE" />
      </div>

      <Link to="/" className="link">
        <button className="backButton">Back</button>
      </Link>
      <div className="App-footer">
        <FooterLinks />
      </div>
    </div>
  );
}

export default Reading;
