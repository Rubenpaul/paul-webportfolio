import React from "react";
import {
  BackgroundContainer,
  Span,
  ProfileContainer,
  ProfileName,
  Greeting,
  Expert,
  Break,
  ButtonContainer,
  Button,
  ImageContainer,
} from "./styledComponents";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { saveAs } from "file-saver";

function Home() {
  const navigate = useNavigate();

  const onClickContact = () => {
    navigate("/contact");
  };

  const onClickDownloadResume = () => {
    const filename = "paul_resume";
    const fileUrl = "Paul_Resume.pdf";

    saveAs(fileUrl, filename);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <BackgroundContainer>
        <ProfileContainer>
          <Greeting>HEllO!</Greeting>
          <ProfileName>
            I'm <Break />
            <Span>Paul</Span>
          </ProfileName>
          <Expert>
            A passionate <Span expert>Web Developer</Span>
          </Expert>
          <ButtonContainer>
            <Button onClick={onClickContact}>Contact Me</Button>
            <Button outline={true} onClick={onClickDownloadResume}>
              Download Resume
            </Button>
          </ButtonContainer>
        </ProfileContainer>
        <ImageContainer></ImageContainer>
      </BackgroundContainer>
    </motion.div>
  );
}

export default Home;
