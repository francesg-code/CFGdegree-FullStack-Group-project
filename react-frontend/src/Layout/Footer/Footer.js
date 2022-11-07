import "./Footer.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../css/custom.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Collapse } from "react-bootstrap";

function FooterLinks() {
  return (
    <Container className="footerWhite">
        <Row className="socialMedia">
            <Col>
                <a href="https://www.facebook.com/diabetesuk/"><FontAwesomeIcon icon={faFacebook}/></a>
            </Col>
            <Col>
                <a href="https://www.instagram.com/diabetesuk/?hl=en"><FontAwesomeIcon icon={faInstagram}/></a>
            </Col>
            <Col>
                <a href="https://www.tiktok.com/@diabetiesunitedkingdom"><FontAwesomeIcon icon={faTiktok}/></a>
            </Col>
            
        </Row>
        
        <Row>
            <Col>
                <Link to="/about">About</Link>
            </Col>
            <Col>
                <Link to="/contactus">Contact Us</Link>
            </Col>
            <Col>
                <Link to="/cookiespolicy">Cookies Policy</Link>
            </Col>
        </Row>

       <Row>
            <Col>
                <Link to="/tcs">T&Cs</Link>
            </Col>
            <Col>
                <Link to="/privacy">Privacy</Link>
            </Col>
            <Col> &copy; HBA 22</Col>
        </Row>
    </Container>
  );
}

export default FooterLinks;
