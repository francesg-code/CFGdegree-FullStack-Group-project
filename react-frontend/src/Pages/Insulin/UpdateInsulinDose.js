import logo from "../../Layout/Logo/HBA_logo.svg";
import "../HomePage/App.css";
import { Link, useNavigate } from "react-router-dom";
import FooterLinks from "../../Layout/Footer/Footer";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../Authentication/Firebase/firebase-config";

//updates the latest insulin dose for the logged in user in Firestore.

function UpdateInsulinDose() {
  const navigate = useNavigate();

  const [user] = useAuthState(auth);

  const today = new Date().toLocaleString();

  //user inputs the latest insulin dose, and timestamp (as a string) into the form

  const [formData, setFormData] = useState({
    insulinDose: "",
    timestamp: "",
  });
  const { insulinDose, timestamp } = formData;

  const onChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
  };

  //sending the data to the user's 'document' in Firestore. It identifies the correct user using the user's Firebase uid which matches the Firestore document id.
  const updateInsulinDose = async () => {
    await setDoc(doc(db, "users", user.uid), {
      name: user.displayName,
      email: user.email,
      insulinDose: insulinDose,
      timestamp: timestamp,
    });
    //feedback to user
    alert("Latest insulin dose updated!");
    //redirects to home once submitted
    navigate("/");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <form onSubmit={onSubmit}>
        <div className="input_label">
          <label>Insulin Dose (units)</label>
          <input
            className="user_input"
            placeholder="Insulin dose"
            id="insulinDose"
            onChange={onChange}
          />
        </div>
        <div className="input_label">
          <label>Date/time</label>
          <input
            className="user_input"
            data-testid="date/time"
            placeholder={today}
            id="timestamp"
            onChange={onChange}
          />
        </div>
        {/* button calls the updateInsulinDose function */}
        <button
          disabled={!insulinDose}
          data-testid="submit-button"
          className="btntwo"
          onClick={updateInsulinDose}
          style={{ margin: 40 }}
        >
          Update latest insulin dose
        </button>
      </form>
      <div>
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

export default UpdateInsulinDose;
