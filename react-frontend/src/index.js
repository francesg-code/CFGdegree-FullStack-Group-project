import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Pages/HomePage/App";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FoodCalculator from "./Pages/FoodCalculator";
import Reading from "./Pages/Reccomended_Reading/Reading";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Cookies from "./Pages/CookiePolicy";
import TermsConditions from "./Pages/TCS";
import Privacy from "./Pages/Privacy";
import InsulinHistory from "./Pages/Insulin/InsulinHistory";
import Insulin from "./Pages/Insulin/Insulin";
import Parents from "./Pages/Parents";
import TopBar from "./Layout/TopBar/TopBar";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./Pages/Authentication/SignIn";
import SignUp from "./Pages/Authentication/SignUp";
import UpdateInsulinDose from "./Pages/Insulin/UpdateInsulinDose";
import InsulinCalculator from "./Pages/Insulin/InsulinCalculator/InsulinCalculator";

const Routing = () => {
  return (
    <Router>
      <TopBar />
      <div className="app">
        <Routes>
          <Route path="/" index element={<App />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/parents" element={<Parents />} />
          <Route path="/insulin-calculator" element={<InsulinCalculator />} />
          <Route path="/insulin" element={<Insulin />} />
          <Route path="/insulin-history" element={<InsulinHistory />} />
          <Route path="/insulin-dose" element={<UpdateInsulinDose />} />
          <Route path="/food-calculator" element={<FoodCalculator />} />
          <Route path="/reading" element={<Reading />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/cookiespolicy" element={<Cookies />} />
          <Route path="/tcs" element={<TermsConditions />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </div>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);
