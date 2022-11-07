import logo from "../Layout/Logo/HBA_logo.svg";
import "./HomePage/App.css";
import FooterLinks from "../Layout/Footer/Footer";
import Axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function FoodCalculator() {
  const [foodQuery, setFoodQuery] = useState("");

  const [carbAmount, setCarbAmount] = useState("");

  //refresh button
  const refreshPage = () => {
    window.location.reload();
  };

  //API request that takes the user input as 'foodQuery' and requests the matching carb abount from an Express server,
  // which queries a local SQL database.
  const search = () => {
    Axios.post("http://localhost:3001/carbs", {
      foodQuery: foodQuery,
    }).then((response) => {
      if (response.data.message) {
        alert(response.data.message);
      } else {
        setCarbAmount(response.data[0].carbs);
      }
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h2>What have you eaten?</h2>
      <input
        type="text"
        className="user_input"
        onChange={(event) => {
          setFoodQuery(event.target.value);
        }}
      />
      <button className="btntwo" onClick={search}>
        Submit
      </button>
      <div>
        {carbAmount ? (
          <h2>
            The carohydrate content (grams) of your {foodQuery} is: {carbAmount}
          </h2>
        ) : null}
      </div>
      <button className="btntwo" onClick={refreshPage}>
        Refresh
      </button>
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

export default FoodCalculator;
