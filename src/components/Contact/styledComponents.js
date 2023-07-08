import styled from "styled-components";

export const ContactBg = styled.div`
  background-color: #080202;
  padding: 30px;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 992px) {
    padding: 25px;
  }

  @media screen and (max-width: 768px) {
    padding: 20px;
  }

  @media screen and (max-width: 576px) {
    padding: 10px;
  }
`;

export const ContactContainer = styled.div`
  padding-left: 30px;
  padding-right: 30px;

  @media screen and (max-width: 992px) {
    padding-left: 25px;
    padding-right: 25px;
  }

  @media screen and (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (max-width: 576px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const Heading = styled.h1`
  color: #ffffff;
  font-weight: 600;
  padding-left: 30px;
  font-size: 32px;
  font-family: "poppins";

  @media screen and (max-width: 992px) {
    font-size: 30px;
    padding-left: 3px;
  }

  @media screen and (max-width: 768px) {
    font-size: 27px;
    padding-left: 5px;
  }

  @media screen and (max-width: 576px) {
    padding-left: 0px;
    font-size: 23px;
  }
`;

export const ContactDetails = styled.ul`
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`;
