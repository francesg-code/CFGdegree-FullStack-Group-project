import logo from "../../Layout/Logo/HBA_logo.svg";
import "../HomePage/App.css";
import { Link } from "react-router-dom";
import FooterLinks from "../../Layout/Footer/Footer";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Authentication/Firebase/firebase-config";

function Insulin() {
  //checks if user is logged in
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p>Save insulin dose</p>
        {/* // if user not logged in, they are prompted to sign-in to save dose */}
        <div>
          {/* Option to save insulin dose to Firestoere database. This data can then be accessed on the 'Parents Data Access' page. */}
          <div className="largeButton">
            <Link to="/sign-in" className="link">
              <button className="btntwo">
                Sign in to save latest insulin dose
              </button>
            </Link>
          </div>
        </div>
      <div class="needsSpace">
        <Link to="/" className="link">
          <button className="backButton">Back</button>
        </Link>
      </div>
      <div className="App-footer">
        <FooterLinks />
      </div>
    </div>
  );
}

export default Insulin;
