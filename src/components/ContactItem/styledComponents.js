import styled from "styled-components";

export const StyledIcon = styled.div`
  color: #18d26e;
  padding: 14px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  font-size: 24px;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 992px) {
    padding: 12px;
    font-size: 19px;
  }

  @media screen and (max-width: 768px) {
    padding: 9px;
    font-size: 16px;
  }

  @media screen and (max-width: 576px) {
    padding: 7px;
    font-size: 14px;
  }
`;

export const Contact = styled.li`
  padding-left: 12px;
  padding-right: 12px;
  margin: 20px;
  display: flex;
  height: 130px;

  @media screen and (max-width: 992px) {
    padding-left: 9px;
    padding-right: 9px;
    margin: 15px;
    height: 120px;
  }

  @media screen and (max-width: 768px) {
    padding-left: 7px;
    padding-right: 7px;
    margin: 10px;
    height: 110px;
  }

  @media screen and (max-width: 576px) {
    padding-left: 4px;
    padding-right: 4px;
    margin: 5px;
    height: 90px;
  }
`;

export const InfoContainer = styled.div`
  color: #444444;
  padding: 20px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  width: 450px;

  @media screen and (max-width: 992px) {
    width: 420px;
    padding: 16px;
  }

  @media screen and (max-width: 768px) {
    width: 390px;
    padding: 13px;
  }

  @media screen and (max-width: 576px) {
    width: 350px;
    padding: 10px;
  }
`;

export const ContactTitle = styled.h1`
  font-size: 21px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 700;
  margin: 8px 0px 8px 68px;
  font-family: "Raleway", sans-serif;

  @media screen and (max-width: 992px) {
    font-size: 20px;
    margin: 7px 0px 7px 54px;
  }

  @media screen and (max-width: 768px) {
    font-size: 19px;
    margin: 6px 0px 6px 48px;
  }

  @media screen and (max-width: 576px) {
    font-size: 17px;
    margin: 4px 0px 4px 38px;
  }
`;

export const ContactDescription = styled.p`
  color: #ffffff;
  padding: 0px;
  line-height: 1.5;
  margin-left: 68px;
  font-size: 14px;
  font-family: "poppins";
  letter-spacing: 1px;
  word-spacing: 2px;

  @media screen and (max-width: 992px) {
    font-size: 12px;
    margin-left: 58px;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin-left: 48px;
  }

  @media screen and (max-width: 576px) {
    font-size: 10px;
    margin-left: 38px;
  }
`;
export const SocialIconsList = styled.div`
  padding: 0px;
  margin-left: 68px;

  @media screen and (max-width: 992px) {
    margin-left: 58px;
  }

  @media screen and (max-width: 768px) {
    margin-left: 48px;
  }

  @media screen and (max-width: 576px) {
    margin-left: 38px;
  }
`;
