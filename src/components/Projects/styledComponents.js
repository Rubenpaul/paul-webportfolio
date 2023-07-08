import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";

export const ArrowIcon = styled(AiOutlineArrowRight)`
  color: #f24c3d;
  height: 20px;
  width: 20px;
  padding: 0px;
  margin-right: 12px;
  margin-top: 7px;
  font-weight: bold;

  @media screen and (max-width: 992px) {
    margin-right: 10px;
    margin-top: 5px;
  }

  @media screen and (max-width: 768px) {
    margin-right: 8px;
    margin-top: 3px;
  }

  @media screen and (max-width: 576px) {
    margin-right: 5px;
    margin-top: 2px;
  }
`;

export const ProjectBgContainer = styled.div`
  background-color: transparent;
  min-height: 100vh;
  padding: 25px 80px;
  overflow: hidden;

  @media screen and (max-width: 992px) {
    padding: 17px 50px;
  }

  @media screen and (max-width: 768px) {
    padding: 16px 35px;
  }

  @media screen and (max-width: 576px) {
    padding: 8px 20px;
  }
`;

export const ProjectMainHeading = styled.h1`
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

export const ProjectsContainer = styled.div`
  margin-top: 30px;
  padding: 10px 5px;

  @media screen and (max-width: 992px) {
    margin-top: 22px;
    padding: 4px 3px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 19px;
    padding: 0px 2px;
  }

  @media screen and (max-width: 576px) {
    margin-top: 12px;
    padding: 0px;
  }
`;

export const ProjectSubHeading = styled.h1`
  color: #aaaaaa;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  padding: 0px;
  letter-spacing: 2px;

  @media screen and (max-width: 992px) {
    font-size: 19px;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 576px) {
    font-size: 15px;
  }
`;

export const Project = styled.ul`
  padding: 0px;
  margin-top: 30px;

  @media screen and (max-width: 992px) {
    margin-top: 27px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 25px;
  }

  @media screen and (max-width: 576px) {
    margin-top: 20px;
  }
`;

export const ProjectItem = styled.li`
  margin-bottom: 20px;
  padding: 10px;
  color: #ffffff;
  list-style-type: none;
  display: flex;

  @media screen and (max-width: 992px) {
    padding: 5px;
    margin-bottom: 22px;
  }

  @media screen and (max-width: 768px) {
    padding: 3px;
    margin-bottom: 25px;
  }

  @media screen and (max-width: 576px) {
    padding: 0px;
    margin-bottom: 28px;
  }
`;

export const ProjectDetailsContainer = styled.div`
  width: 100%;
  padding: 0px;
`;

export const ProjectAppLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;

  @media screen and (max-width: 1250px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ProjectName = styled.h1`
  color: #18d26e;
  font-size: 29px;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  margin: 0px;
  letter-spacing: 1px;

  @media screen and (max-width: 1250px) {
    font-size: 27px;
    margin-bottom: 18px;
  }

  @media screen and (max-width: 992px) {
    font-size: 25px;
    margin-bottom: 16px;
  }

  @media screen and (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 576px) {
    font-size: 20px;
    margin-bottom: 14px;
  }
`;

export const AppLink = styled.a`
  padding: 0px;
  text-decoration: none;
  font-size: 18px;
  font-family: "Signika";
  font-weight: 500;
  margin: 0px;
  color: #ff6666;
  line-height: 1.2;
  letter-spacing: 1px;

  @media screen and (max-width: 992px) {
    font-size: 17px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 576px) {
    font-size: 15px;
  }
`;

export const TechnologiesUsed = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  margin: 15px 0px;
  letter-spacing: 0.5px;
  line-height: 1.5;
  font-family: "Poppins", sans-serif;

  @media screen and (max-width: 992px) {
    font-size: 18px;
    margin: 13px 0px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin: 12px 0px;
  }

  @media screen and (max-width: 576px) {
    font-size: 15px;
    margin: 10px 0px;
  }
`;

export const Span = styled.span`
  margin: 0px;
  color: #ffe569;
  font-family: "Raleway";
`;

export const ProjetDescription = styled.p`
  color: #f7f7f7;
  font-size: 18px;
  font-family: "Poppins";
  font-weight: 500;
  margin: 8px 0px;

  @media screen and (max-width: 768px) {
    font-size: 17px;
    margin: 11px 0px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin: 12px 0px;
  }

  @media screen and (max-width: 576px) {
    font-size: 15px;
    margin: 20px 0px;
  }
`;

export const ProjectKeyFeaturesList = styled.ul`
  padding-left: 35px;
  margin-top: 15px;

  @media screen and (max-width: 992px) {
    padding-left: 30px;
    margin-top: 14px;
  }

  @media screen and (max-width: 768px) {
    padding-left: 28px;
    margin-top: 13px;
  }

  @media screen and (max-width: 576px) {
    padding-left: 25px;
    margin-top: 9px;
  }
`;

export const ProjectFeature = styled.li`
  list-style-type: disc;
  margin-bottom: 12px;

  @media screen and (max-width: 576px) {
    margin-bottom: 11px;
  }
`;

export const ProjectKeyFeature = styled.p`
  color: #fff2f9;
  font-size: 17px;
  letter-spacing: 1px;
  line-height: 1.3;
  padding: 0px;
  margin: 0px;

  @media screen and (max-width: 992px) {
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }

  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`;
