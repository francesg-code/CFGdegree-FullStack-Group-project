import logo from "../../Layout/Logo/HBA_logo.svg";
import "../HomePage/App.css";
import { Link, useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "./Firebase/firebase-config";
import FooterLinks from "../../Layout/Footer/Footer";
import { useState } from "react";

function SignUp() {
  //very similar to sign-in page except it uses the Firebase createUserWithEmailAndPassword function.
  //Please note data will need to be added into Firestore (db) manually once the user has been created in Firebase.
  //You'll see the name in Firestore but no fields like insulinDose

  //feel free to create your own user!

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const navigate = useNavigate();

  const onChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      updateProfile(auth.currentUser, {
        displayName: name,
      });

      const formDataCopy = { ...formData };
      delete formDataCopy.password;

      await setDoc(doc(db, "users", user.uid), formDataCopy);

      navigate("/");
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <form onSubmit={onSubmit}>
        <div className="input_label">
          <label>Name</label>
          <input
            className="user_input"
            placeholder="Name"
            id="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="input_label">
          <label>Email</label>
          <input
            className="user_input"
            placeholder="Email"
            id="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="input_label">
          <label>Password</label>
          <input
            className="user_input"
            placeholder="Password"
            id="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <button className="submitButton">Submit</button>
      </form>
      <div className="largeButton">
        <Link to="/sign-in" className="link">
          <button className="existingAccountButton">
            Sign in with existing account
          </button>
        </Link>
      </div>

      <div className="App-footer">
        <FooterLinks />
      </div>
    </div>
  );
}

export default SignUp;
