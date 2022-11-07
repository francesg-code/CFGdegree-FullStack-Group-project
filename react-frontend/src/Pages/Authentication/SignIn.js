import logo from "../../Layout/Logo/HBA_logo.svg";
import "../HomePage/App.css";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import FooterLinks from "../../Layout/Footer/Footer";
import { useState } from "react";

//test user: harrypotter@gmail.com pass: abc123!
//test user2: ronweasley@gmail.com pass:abc123!

function SignIn() {
  const navigate = useNavigate();

  const auth = getAuth();

  //they sign in using the signInWithEmailAndPassword function from Firebase.
  //It requires email and password and have updated our wording from username to email as it seemed more straightforward.
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  //the onchange function means you can type in the input boxes!
  const onChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
  };

  //sending the request to Firebase
  const signInWithCredentials = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      if (signInWithCredentials) {
        //redirects to homepage once logged in
        navigate("/");
      }
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
        {/* button calls the Firebase sign in function */}
        <button className="submitButton" onClick={signInWithCredentials}>
          Submit
        </button>
      </form>
      <Link to="/sign-up" className="link">
        {/* Had to make a seperate sign-in and sign-up page in the end to get the Firebase user to match the Firestore user */}
        <button className="createAccountButton">Create new account</button>
      </Link>
      <div className="App-footer">
        <FooterLinks />
      </div>
    </div>
  );
}

export default SignIn;
