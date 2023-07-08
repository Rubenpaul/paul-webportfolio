import styled from "styled-components";

export const AboutBgContainer = styled.div`
  background-color: transparent;
  min-height: 100vh;
  padding: 25px 80px;

  @media screen and (max-width: 992px) {
    padding: 16px 50px;
  }

  @media screen and (max-width: 768px) {
    padding: 13px 35px;
  }

  @media screen and (max-width: 576px) {
    padding: 5px 20px;
  }
`;

export const AboutHeading = styled.h1`
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-size: 32px;

  @media screen and (max-width: 992px) {
    font-size: 30px;
  }

  @media screen and (max-width: 768px) {
    font-size: 27px;
  }

  @media screen and (max-width: 576px) {
    font-size: 23px;
  }
`;

export const AboutContainer = styled.div`
  margin-top: 40px;
  padding: 10px 5px;

  @media screen and (max-width: 992px) {
    margin-top: 33px;
    padding: 9px 4px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 25px;
    padding: 8px 3px;
  }

  @media screen and (max-width: 576px) {
    margin-top: 18px;
    padding: 5px 3px;
  }
`;

export const MyPassion = styled.h1`
  color: #18d26e;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  margin: 0px;
  font-size: 26px;

  @media screen and (max-width: 992px) {
    font-size: 25px;
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`;

export const MyPassionDescription = styled.p`
  color: #ffffff;
  font-size: 17px;
  font-family: "Poppins";
  font-weight: 500;
  word-spacing: 2px;
  line-height: 1.6;
  margin: 30px 0px;

  @media screen and (max-width: 992px) {
    font-size: 16px;
    line-height: 1.5;
    margin: 23px 0px;
  }

  @media screen and (max-width: 768px) {
    font-size: 15px;
    line-height: 1.5;
    margin: 20px 0px;
  }

  @media screen and (max-width: 576px) {
    font-size: 13px;
    line-height: 1.4;
    margin: 13px 0px;
  }
`;

export const Span = styled.span`
  color: #feff86;
  font-weight: 600;
`;

export const ProfileDataContainer = styled.ul`
  padding: 0px;
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  @media screen and (max-width: 768px) {
    margin-top: 0px;
  }

  @media screen and (max-width: 576px) {
    margin-top: 0px;
  }
`;

export const ProfileDataItem = styled.li`
  color: #ffffff;
  width: 40%;
  margin: 10px 20px;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  word-spacing: 1px;
  font-family: "Poppins";

  @media screen and (max-width: 992px) {
    width: 43%;
    font-size: 14px;
    margin: 8px 19px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 14px;
    margin: 6px 18px;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    font-size: 12px;
    margin: 4px 15px;
  }
`;

export const DataHeading = styled.strong`
  color: #ffffff;
  margin-left: 8px;
`;

export const SkillsHeading = styled.h2`
  color: #aaaaaa;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  padding: 0px;
  margin: 20px 0px;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media screen and (max-width: 992px) {
    font-size: 15px;
    margin: 17px 0px;
  }

  @media screen and (max-width: 768px) {
    font-size: 15px;
    margin: 15px 0px;
  }

  @media screen and (max-width: 576px) {
    font-size: 14px;
    margin: 8px 0px;
  }
`;

export const SkillsContainer = styled.ul`
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SkillItem = styled.li`
  color: #ffffff;
  margin: 0px 30px 25px 0px;
  width: 43%;
  padding: 6px;

  @media screen and (max-width: 992px) {
    width: 42%;
    margin: 0px 20px 20px 0px;
  }

  @media screen and (max-width: 780px) {
    width: 41%;
    margin: 0px 10px 15px 0px;
  }

  @media screen and (max-width: 576px) {
    width: 90%;
    margin: 0px 5px 10px 0px;
  }
`;

export const SkillNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SkillDetails = styled.h2`
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  margin: 0px;

  @media screen and (max-width: 992px) {
    font-size: 12px;
  }

  @media screen and (max-width: 768px) {
    font-size: 11px;
  }

  @media screen and (max-width: 576px) {
    font-size: 10px;
  }
`;

export const SkillPercentageContainer = styled.div`
  margin-top: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  width: 100%;
  padding: 0px;
`;

export const SkillPercentage = styled.div`
  height: 8px;
  background-color: #18d26e;
  padding-top: 0px;
  width: ${(props) => (props.width !== undefined ? props.width : "")};

  @media screen and (max-width: 992px) {
    height: 7px;
  }

  @media screen and (max-width: 768px) {
    height: 6px;
  }

  @media screen and (max-width: 576px) {
    height: 4px;
  }
`;
