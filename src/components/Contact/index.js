import React from "react";
import {
  ContactBg,
  ContactContainer,
  Heading,
  ContactDetails,
} from "./styledComponents";

import ContactItem from "../ContactItem/index";

import { motion } from "framer-motion";

const contactItems = [
  {
    id: 1,
    icon: "location",
    title: "My Address",
    description: "F/34 APGENCO COLONY, GUNTUR, ANDHRA PRADESH, AP 522426",
  },
  {
    id: 2,
    icon: "profile",
    title: "Social Profiles",
    description: [
      {
        id: 1,
        icon: "twitter",
      },
      {
        id: 2,
        icon: "linkedin",
      },

      {
        id: 3,
        icon: "facebook",
      },
    ],
  },
  {
    id: 3,
    icon: "email",
    title: "Email Me",
    description: "rubenpaul29@gmail.com",
  },
  {
    id: 4,
    icon: "phone",
    title: "Call Me",
    description: "91+ 7901381285",
  },
];

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <ContactBg>
        <ContactContainer>
          <Heading>CONTACT ME</Heading>
          <ContactDetails>
            {contactItems.map((eachItem) => (
              <ContactItem eachItem={eachItem} key={eachItem.id} />
            ))}
          </ContactDetails>
        </ContactContainer>
      </ContactBg>
    </motion.div>
  );
}

export default Contact;
