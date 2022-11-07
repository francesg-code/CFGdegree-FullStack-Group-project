import logo from "../../Layout/Logo/HBA_logo.svg";
import "./App.css";
import Button from "../../Layout/Buttons/Button";
import FooterLinks from "../../Layout/Footer/Footer";
import "../../Layout/Footer/Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { signOut } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Authentication/Firebase/firebase-config";

function App() {
  //Getting the Firebase (not Firestore) details of the current logged in user e.g. displayName

  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  //log out button redirects to sign in page
  const signUserOut = async () => {
    await signOut(auth);
    navigate("/sign-in");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className="mainbody">
        <Link to="/insulin-calculator" className="link">
          <Button buttonText="Calculate Insulin Dose" buttonColor="#a7dafb" />
        </Link>
        <Link to="/food-calculator" className="link">
          <Button buttonText="Food Calculator" buttonColor="#fffaaf" />
        </Link>
        <Link to="/reading" className="link">
          <Button buttonText="Recommended Reading" buttonColor="#b1d6a7" />
        </Link>
        {/* Logout button only visible to logged in users */}
        {user ? (
          <div>
            <button onClick={signUserOut} className="signInButton">
              Log out
            </button>
          </div>
        ) : (
          <div>
            <Link to="/sign-in" className="link">
              <button className="signInButton"> Sign in </button>
            </Link>
          </div>
        )}
      </div>
      <div className="App-footer">
        <FooterLinks />
      </div>
    </div>
  );
}

export default App;
