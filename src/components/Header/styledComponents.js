import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

export const Container = styled.div`
  width: 100%;
  background-color: #222222;
`;

export const Navbar = styled.nav`
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 18vh;

  @media screen and (max-width: 992px) {
    width: 88%;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  @media screen and (max-width: 576px) {
    width: 95%;
  }
`;

export const ProfilePicContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: #f6f1e9;

  @media screen and (max-width: 992px) {
    height: 58px;
    width: 58px;
  }
`;

export const ProfilePic = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-color: #ddffbb;

  @media screen and (max-width: 992px) {
    height: 52px;
    width: 52px;
  }
`;

export const Name = styled.h1`
  font-size: 40px;
  text-decoration: none;
  color: greenyellow;
  font-weight: 600;
  font-family: "Courier New", Courier, monospace;
`;

export const NavLinkContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  padding: 10px 0px;
  width: 365px;

  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const NavLink = styled.li`
  padding: 2px;
`;

export const RouteLink = styled(Link)`
  color: ${(props) => (props.isactive === "true" ? "#e57c23" : "#ffffff")};
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
  font-family: "Poppins";

  &:hover {
    color: ${(props) => (props.isactive === "true" ? "#e57c23" : "#A2FF86")};
    font-weight: 500;
  }
`;

export const HamburgerListContainer = styled.ul`
  display: none;

  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin: auto;
    padding: 0px;
    width: 95%;
    padding: 12px 0px;
  }
`;

export const HamburgerItem = styled.li`
  padding: 8px 8px;
`;

export const BurgerIcon = styled(GiHamburgerMenu)`
  display: none;
  @media screen and (max-width: 576px) {
    display: flex;
    color: #a2ff86;
    height: 25px;
    width: 25px;
    cursor: pointer;
  }
`;

export const CloseIcon = styled(RxCross2)`
  display: none;
  @media screen and (max-width: 576px) {
    display: flex;
    color: #f86f03;
    height: 25px;
    width: 25px;
    cursor: pointer;
  }
`;
