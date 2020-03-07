import React from "react"
import { Link } from "gatsby"
import { GiFamilyHouse } from "react-icons/gi";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import { Navbar, Nav} from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar">
        {/* <Container> */}
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span"><GiFamilyHouse className="rIcon" /><span className="title">RODI SERVICES</span></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <AnchorLink to="/#services" title="Services">
            <span style={{marginRight: "10px"}}>SERVICES</span>
          </AnchorLink>
          <AnchorLink to="/#about" title="About">
            <span>ABOUT</span>
          </AnchorLink>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default CustomNavbar
