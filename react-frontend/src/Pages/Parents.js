import logo from "../Layout/Logo/HBA_logo.svg";
import "./HomePage/App.css";
import { Link } from "react-router-dom";
import FooterLinks from "../Layout/Footer/Footer";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./Authentication/Firebase/firebase-config";

function Parents() {
  //checks if user is logged in
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        {user ? (
          <p>
            How we collect {user.displayName}'s information and how it can help
            them!
          </p>
        ) : (
          <p>
            How we collect your child's information and how it can help them!
          </p>
        )}
      </div>
      {user ? (
        <div className="largeButton">
          <Link to="/insulin-history" className="link">
            <button className="btntwo">
              {" "}
              View {user.displayName}'s latest insulin dose{" "}
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <div className="largeButton">
            <Link to="/sign-in" className="link">
              <button className="btntwo">
                {" "}
                Sign in to view your child's latest insulin dose{" "}
              </button>
            </Link>
          </div>
        </div>
      )}
      <div className="needsLittleSpace">
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

export default Parents;
