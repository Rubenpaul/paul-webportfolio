import React from "react";
import { useState } from "react";

import {
  Container,
  Navbar,
  ProfilePicContainer,
  ProfilePic,
  NavLinkContainer,
  NavLink,
  RouteLink,
  BurgerIcon,
  HamburgerListContainer,
  HamburgerItem,
  CloseIcon,
} from "./styledComponents";

import profilePic from "../../assets/coding.png";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [isMenuClicked, setMenu] = useState(false);

  const onClickOpenMenu = () => {
    setMenu(true);
  };

  const onClickCloseMenu = () => {
    setMenu(false);
  };

  return (
    <Container>
      <Navbar>
        <Link to="/">
          <ProfilePicContainer>
            <ProfilePic src={profilePic} alt="profile" />
          </ProfilePicContainer>
        </Link>
        <NavLinkContainer>
          <NavLink>
            <RouteLink
              to="/"
              isactive={location.pathname === "/" ? "true" : "false"}
            >
              Home
            </RouteLink>
          </NavLink>
          <NavLink>
            <RouteLink
              to="/about"
              isactive={location.pathname === "/about" ? "true" : "false"}
            >
              About
            </RouteLink>
          </NavLink>
          <NavLink>
            <RouteLink
              to="/projects"
              isactive={location.pathname === "/projects" ? "true" : "false"}
            >
              Projects
            </RouteLink>
          </NavLink>
          <NavLink>
            <RouteLink
              to="/contact"
              isactive={location.pathname === "/contact" ? "true" : "false"}
            >
              Contact
            </RouteLink>
          </NavLink>
        </NavLinkContainer>
        {isMenuClicked ? (
          <CloseIcon onClick={onClickCloseMenu} />
        ) : (
          <BurgerIcon onClick={onClickOpenMenu} />
        )}
      </Navbar>

      {isMenuClicked ? (
        <HamburgerListContainer>
          <HamburgerItem>
            <RouteLink
              to="/"
              isactive={location.pathname === "/" ? "true" : "false"}
            >
              Home
            </RouteLink>
          </HamburgerItem>
          <HamburgerItem>
            <RouteLink
              to="/about"
              isactive={location.pathname === "/about" ? "true" : "false"}
            >
              About
            </RouteLink>
          </HamburgerItem>
          <HamburgerItem>
            <RouteLink
              to="/projects"
              isactive={location.pathname === "/projects" ? "true" : "false"}
            >
              Projects
            </RouteLink>
          </HamburgerItem>
          <HamburgerItem>
            <RouteLink
              to="/contact"
              isactive={location.pathname === "/contact" ? "true" : "false"}
            >
              Contact
            </RouteLink>
          </HamburgerItem>
        </HamburgerListContainer>
      ) : null}
    </Container>
  );
}

export default Header;
