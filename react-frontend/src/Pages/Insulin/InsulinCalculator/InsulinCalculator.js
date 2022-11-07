import logo from "../../../Layout/Logo/HBA_logo.svg";
import "./InsCal.css";
import { Link } from "react-router-dom";
import FooterLinks from "../../../Layout/Footer/Footer";
import React, { useState } from "react";

function App() {
  // state
  const [Carbohydrates, setCarbohydrates] = useState(0);
  const [Units, setUnits] = useState("");
  const [Message, setMessage] = useState("");

  let calcUnits = (event) => {
    //prevent submitting
    event.preventDefault();

    if (Carbohydrates === 0) {
      alert("Please enter a valid amount of Carbohydrates");
    } else {
      let Units = Carbohydrates / 10;
      setUnits(Units.toFixed(1));

      // Logic for message

      if (Carbohydrates < 50) {
        setMessage("Low Carbs Keep You At Your Best");
      } else if (Carbohydrates <= 100) {
        setMessage("That is a Healthy Amount of Carbs");
      } else {
        setMessage("Keep Carbs Below 200g Per Day");
      }
    }
  };

  // SHOW IMAGE BASED ON INSULIN CALC
  let imgSrc;

  if (Carbohydrates < 1) {
    imgSrc = null;
  } else {
    if (Carbohydrates < 50) {
      imgSrc = require("./images/youngMan.jpg");
    } else if (Carbohydrates >= 50 && Carbohydrates <= 100) {
      imgSrc = require("./images/fruit.jpg");
    } else {
      imgSrc = require("./images/bread.jpg");
    }
  }

  function refreshPage() {
    window.location.reload();
  }

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="container">
        <form onSubmit={calcUnits}>
          <div>
            <label className="inputLabel">Carborhydrates in Meal (g)</label>
            <input
              value={Carbohydrates}
              onChange={(event) => setCarbohydrates(event.target.value)}
            />
          </div>
          <div>
            <label className="inputLabel">Insulin Correction (Units)</label>
            <input
              value={Units}
              onChange={(event) => setUnits(event.target.value)}
            />
          </div>
          <div>
            <button
              className="btntwo"
              style={{
                padding: "20px 100px",
              }}
              type="Calculate"
            >
              SUBMIT
            </button>
            <button
              className="btnone"
              style={{
                padding: "20px 100px",
              }}
              onClick={reload}
              type="Calculate"
            >
              RELOAD
            </button>
          </div>
        </form>

        <div className="center">
          <h2> You Need to Take: {Units} Units before your Meal </h2>
          <p>{Message}</p>
        </div>

        <div className="img-container">
          <img src={imgSrc} alt=""></img>
        </div>
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

export default App;
