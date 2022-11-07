import { auth, db } from "../Authentication/Firebase/firebase-config";
import { getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import logo from "../../Layout/Logo/HBA_logo.svg";
import "../HomePage/App.css";
import "../../Layout/Buttons/Button.css";
import FooterLinks from "../../Layout/Footer/Footer";
import Spinner from "react-bootstrap/Spinner";

//This page pulls in the fields from the Firestore database for the specific user that's logged in.
//At the mo, the data has to be manually added to the user in Firestore. We may be able to get it automatically added when they calaculate insulin dose on the isulin page
//https://console.firebase.google.com/project/happy-bodies-anywhere/firestore/data/~2Fusers~2F65MoLtxHjJb7sTPHEahToV5hzG42

function InsulinHistory() {
  //The authstate hook gets the current user
  const [user] = useAuthState(auth);
  //insulinHistory is where the results will be stored. We can then get the individual fields from Firestore with the name of the field e.g.  insulinHistory.insulinDose
  const [insulinHistory, setInsulinHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUserInfo = async () => {
    setIsLoading(true);
    const userRef = doc(db, "users", user.uid);
    const insulinData = await getDoc(userRef);
    if (insulinData.exists()) {
      setInsulinHistory(insulinData.data());
    } else {
      //my alert doesn't seem to pop up. Not sure why
      alert("No data");
    }
    setIsLoading(false);
  };

  //calling the fetchuserinfo function
  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {!isLoading ? (
        <div>
          <div>
            <h2>Name: {insulinHistory.name}</h2>
            {insulinHistory.insulinDose ? (
              <div>
                <h2>
                  Latest Insulin Dose (units): {insulinHistory.insulinDose}
                </h2>
                <h2>Timestamp: {insulinHistory.timestamp}</h2>
              </div>
            ) : (
              <div>
                <h2>No data found</h2>
                <Link to="/insulin-dose" className="link">
                  <button className="btntwo">Update insulin dose</button>
                </Link>
              </div>
            )}
            <div>
              <Link to="/parents" className="link">
                <button className="backButton">Back</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <Spinner animation="border" />
      )}
      <div className="App-footer">
        <FooterLinks />
      </div>
    </div>
  );
}

export default InsulinHistory;
