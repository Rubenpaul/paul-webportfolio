import styled, { keyframes } from "styled-components";
import img from "../../assets/developer.jpg";

const MoveUp = keyframes`
    from {
      transform: translateY(70%);
      
    }
    to {
      transform: translateY(0);
      
}`;

const MoveLeft = keyframes`
    from {
      transform: translateX(70%);

    }
    to {
      transform: translateX(0)

}`;

export const BackgroundContainer = styled.div`
  min-height: 82vh;
  background-color: #000000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 576px) {
    min-height: 75vh;
  }
`;

export const ProfileContainer = styled.div`
  padding: 10px;
  animation: ${MoveUp} 1s ease-in-out;
`;

export const Break = styled.br`
  width: 100%;
`;

export const Span = styled.span`
  color: #ffd95a;
`;

export const Greeting = styled.h2`
  font-size: 11px;
  color: #ffd95a;
  letter-spacing: 2px;

  @media screen and (max-width: 576px) {
    font-size: 7px;
    font-weight: bold;
  }
`;

export const ProfileName = styled.h1`
  font-size: 60px;
  color: #ffffff;
  font-family: "Poppins";
  line-height: 1;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 576px) {
    font-size: 48px;
  }
`;

export const Expert = styled.p`
  font-size: 25px;
  font-family: "Poppins";
  color: #ffffff;
  font-weight: 500;

  @media screen and (max-width: 576px) {
    font-size: 22px;
  }
`;

export const ButtonContainer = styled.div`
  display: inline-block;
`;

export const Button = styled.button`
  font-size: 15px;
  font-family: "Poppins";
  font-weight: 600;
  color: ${(props) => (props.outline === true ? "#ffffff" : "#080202")};
  background-color: ${(props) =>
    props.outline === true ? "transparent" : "#E7B10A"};
  border: ${(props) => (props.outline === true ? "1px solid #FFFFFF" : "none")};
  cursor: pointer;
  outline: none;
  height: 40px;
  margin-right: 7px;
  margin-top: 7px;
  border-radius: 40px;
  display: inline-block;
  padding: 0px 15px;
  transition: all 0.1s;

  @media screen and (max-width: 576px) {
    font-size: 13px;
    height: 35px;
  }
`;

export const ImageContainer = styled.div`
  height: 400px;
  width: 32%;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  border-radius: 100%;
  animation: ${MoveLeft} 1s ease-in-out;

  @media screen and (max-width: 1100px) {
    width: 33%;
    height: 350px;
  }

  @media screen and (max-width: 1000px) {
    width: 35%;
    height: 320px;
  }

  @media screen and (max-width: 900px) {
    width: 36%;
    height: 270px;
  }

  @media screen and (max-width: 700px) {
    width: 0%;
    visibility: hidden;
  }
`;
