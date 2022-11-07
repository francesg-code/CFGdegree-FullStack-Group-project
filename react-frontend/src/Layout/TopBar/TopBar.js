import "./TopBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Pages/Authentication/Firebase/firebase-config";
import { signOut } from "firebase/auth";
import { useState } from "react";

function TopBar() {
  //checks if user is logged in
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  //log out button redirects to sign in page
  const signUserOut = async () => {
    await signOut(auth);
    navigate("/sign-in");
  };

  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="xxlg" expanded={expanded}>
      <Container>
        <Navbar.Brand>
          <Link to="/" onClick={() => setExpanded(false)} className="logotype">
            Happy Bodies Anywhere
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : "expanded")}
          aria-controls="responsive-navbar-nav"
          style={{ border: "none", boxShadow: "none", marginRight: "-10px" }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* if user is not logged in, they'll see the sign-in link */}
            {!user ? (
              <Link
                to="sign-in"
                onClick={() => setExpanded(false)}
                className="titles"
              >
                SignIn
              </Link>
            ) : (
              <Link to="sign-in" className="titles" onClick={signUserOut}>
                LogOut
              </Link>
            )}
            <Link
              to="/"
              onClick={() => setExpanded(false)}
              Menu
              className="titles"
            >
              Home
            </Link>
            <Link
              to="insulin-calculator"
              onClick={() => setExpanded(false)}
              className="titles"
            >
              Calculate Insulin
            </Link>
            <Link
              to="food-calculator"
              onClick={() => setExpanded(false)}
              className="titles"
            >
              Food Calculator
            </Link>
            {!user ? (
               <Link
               to="insulin"
               onClick={() => setExpanded(false)}
               className="titles"
             >
               Update insulin
             </Link>
           ) : (
            <Link
              to="insulin-dose"
              onClick={() => setExpanded(false)}
              className="titles"
            >
              Update Insulin
            </Link>
            )}
            <Link
              to="reading"
              onClick={() => setExpanded(false)}
              className="titles"
            >
              Further Reading
            </Link>
            <Link
              to="parents"
              onClick={() => setExpanded(false)}
              className="titles"
            >
              For Parents
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;
