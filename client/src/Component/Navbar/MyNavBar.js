import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import { GiFeatheredWing } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa";
import "./Navbar.css";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import { userData } from "../SliceAuth";

function MyNavBar() {
  const currentUser = useSelector(userData);

  const navi = useNavigate();

  function onProfClick() {
    if (currentUser.uType === "Customer") {
      navi("/custprofile");
    } else {
      navi("/profile");
    }
  }

  function onCartClick() {
    navi("/cart");
  }

  return (
    <div>
      <Navbar
        id="mainnavbar"
        fixed="top"
        collapseOnSelect
        expand="lg"
        variant="light"
        bg="dark"
      >
        <Container>
          <Navbar.Brand
            className="mynavbarbrand"
            style={{ color: "white", fontSize: "25px" }}
          >
            <GiFeatheredWing className="icons1" />
            u d a a n<GiFeatheredWing className="icons2" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsible-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="responsible-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="mlink">
                {" "}
                Home
                {/*<Link  className="mlink" to="/">Home</Link>*/}
              </Nav.Link>

              <Nav.Link href="#services" className="mlink">
                Services
                {/*<Link className="mlink" to="/services">Services</Link>*/}
              </Nav.Link>

              <Nav.Link href="#work" className="mlink">
                Work
                {/* <Link className="mlink" to="/work">Work</Link>*/}
              </Nav.Link>

              <Nav.Link href="#artistlist" className="mlink">
                Top Artist
                {/*<Link className="mlink" to="/team">Team</Link>*/}
              </Nav.Link>

              <Link
                to="/login"
                className="mlink"
                style={{ position: "relative", top: "8px", marginLeft: "5px" }}
              >
                Sign-Up/Log-In
                {/*} <Link className="mlink" to="/login">Sign-Up/Log-In</Link>*/}
              </Link>

              <CgProfile
                onClick={onProfClick}
                style={{
                  fontSize: "25px",
                  position: "relative",
                  top: "8px",
                  marginLeft: "13px",
                  color:'white'
                }}
              />

              <FaCartPlus
                onClick={onCartClick}
                style={{
                  fontSize: "25px",
                  position: "relative",
                  top: "8px",
                  marginLeft: "13px",
                  color:'white'
                }}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavBar;
