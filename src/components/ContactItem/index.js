import React from "react";

import SocialIcon from "../SocialIcon";

import {
  Contact,
  ContactTitle,
  ContactDescription,
  InfoContainer,
  StyledIcon,
  SocialIconsList,
} from "./styledComponents";

import { TfiLocationPin } from "react-icons/tfi";
import { BiShareAlt, BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";

import { motion } from "framer-motion";

function ContactItem(props) {
  const { icon, title, description } = props.eachItem;

  const setIcon = () => {
    switch (icon) {
      case "location":
        return <TfiLocationPin />;
      case "profile":
        return <BiShareAlt />;
      case "email":
        return <HiOutlineMail />;
      case "phone":
        return <BiPhoneCall />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <Contact>
        <InfoContainer>
          <StyledIcon>{setIcon()}</StyledIcon>
          <ContactTitle>{title}</ContactTitle>

          {Array.isArray(description) ? (
            <SocialIconsList>
              {description.map((eachItem) => (
                <SocialIcon key={eachItem.id} eachItem={eachItem} />
              ))}
            </SocialIconsList>
          ) : (
            <ContactDescription>{description}</ContactDescription>
          )}
        </InfoContainer>
      </Contact>
    </motion.div>
  );
}

export default ContactItem;
