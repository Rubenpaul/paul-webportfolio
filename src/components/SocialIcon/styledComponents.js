import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledSocialIcon = styled.div`
  color: #ffffff;
  line-height: 1.5;
  margin-right: 12px;
  transition: 0.3s;
  font-size: 15px;
  text-decoration: none;

  &:hover {
    color: #18d26e;
  }
`;

export const SocialIconLink = styled(Link)`
  padding: 0px;
  display: inline-block;
`;
