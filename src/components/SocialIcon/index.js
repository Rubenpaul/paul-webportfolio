import React from "react";
import { SocialIconLink, StyledSocialIcon } from "./styledComponents";

import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

const facebookUrl = "https://facebook.com/rubenpaul29/";
const linkedinUrl = "https://www.linkedin.com/in/paul-manamala/";
const twitterUrl = "https://twitter.com/";

function SocialIcon(props) {
  const { icon } = props.eachItem;

  const renderSocialocialIcon = () => {
    switch (icon) {
      case "linkedin":
        return <BsLinkedin />;
      case "facebook":
        return <BsFacebook />;
      case "twitter":
        return <BsTwitter />;
      default:
        return null;
    }
  };

  const activeLink = () => {
    switch (icon) {
      case "linkedin":
        return linkedinUrl;
      case "facebook":
        return facebookUrl;
      case "twitter":
        return twitterUrl;
      default:
        return null;
    }
  };

  return (
    <SocialIconLink to={activeLink()} target="_blank">
      <StyledSocialIcon>{renderSocialocialIcon()}</StyledSocialIcon>
    </SocialIconLink>
  );
}

export default SocialIcon;
