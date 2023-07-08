import styled from "styled-components";
import { Link } from "react-router-dom";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  min-height: 80vh;
`;

export const NotFoundHeading = styled.h1`
  color: #a4907c;
  font-size: 50px;
  font-family: "Poppins";
  font-weight: 400;

  @media screen and (max-width: 992px) {
    font-size: 45px;
  }

  @media screen and (max-width: 768px) {
    font-size: 41px;
  }

  @media screen and (max-width: 576px) {
    font-size: 38px;
  }
`;

export const NotFoundDescription = styled.p`
  color: #e8f6ef;
  font-size: 24px;
  font-family: "Raleway";
  font-weight: 100;
  margin: 0px;
  margin-bottom: 5px;
  text-align: center;

  @media screen and (max-width: 992px) {
    font-size: 21px;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 576px) {
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

export const GoToHomeBtn = styled.button`
  margin: 0px;
  height: 40px;
  width: 150px;
  border: 0px;
  border-radius: 8px;
  cursor: pointer;
  background-color: #00dfa2;
  color: #ffffff;
  font-family: "Raleway";
  font-weight: bold;

  @media screen and (max-width: 992px) {
    height: 38px;
    font-size: 14px;
    width: 146px;
  }

  @media screen and (max-width: 768px) {
    height: 35px;
    font-size: 13px;
    width: 140px;
  }

  @media screen and (max-width: 576px) {
    height: 32px;
    font-size: 12px;
    width: 130px;
  }
`;

export const HomeLink = styled(Link)`
  margin-top: 50px;

  @media screen and (max-width: 768px) {
    margin-top: 48px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 45px;
  }

  @media screen and (max-width: 576px) {
    margin-top: 35px;
  }
`;
