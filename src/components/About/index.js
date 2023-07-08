import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import { motion } from "framer-motion";

import {
  AboutBgContainer,
  AboutHeading,
  AboutContainer,
  MyPassion,
  MyPassionDescription,
  Span,
  ProfileDataContainer,
  ProfileDataItem,
  DataHeading,
  SkillsHeading,
  SkillsContainer,
  SkillItem,
  SkillNameContainer,
  SkillDetails,
  SkillPercentageContainer,
  SkillPercentage,
} from "./styledComponents";

const profileData = [
  {
    id: 1,
    dataHeading: "Birthday",
    dataContent: ": 28 October 1997",
  },
  {
    id: 2,
    dataHeading: "Age",
    dataContent: ": 25",
  },
  {
    id: 3,
    dataHeading: "Degree",
    dataContent: ": Bacherlor",
  },
  {
    id: 4,
    dataHeading: "Phone",
    dataContent: ": 91+ 7901381285",
  },
  {
    id: 5,
    dataHeading: "Email",
    dataContent: ": rubenpaul29@gmail.com",
  },
  {
    id: 6,
    dataHeading: "City",
    dataContent: ": Guntur, INDIA",
  },
];

const skillData = [
  {
    id: 1,
    skill: "HTML",
    percentage: "100%",
  },
  {
    id: 2,
    skill: "CSS",
    percentage: "90%",
  },
  {
    id: 3,
    skill: "JAVASCRIPT",
    percentage: "75%",
  },
  {
    id: 4,
    skill: "REACT.JS",
    percentage: "85%",
  },
  {
    id: 5,
    skill: "NODE.JS",
    percentage: "70%",
  },
  {
    id: 6,
    skill: "EXPRESS.JS",
    percentage: "75%",
  },
  {
    id: 7,
    skill: "SQL (SQLITE3 DATABASE)",
    percentage: "80%",
  },
  {
    id: 8,
    skill: "PYHTON",
    percentage: "50%",
  },
  {
    id: 9,
    skill: "CSS-FLEXBOX",
    percentage: "80%",
  },
  {
    id: 10,
    skill: "BOOTSTRAP",
    percentage: "90%",
  },
];

const renderProjectData = (eachData) => {
  return (
    <ProfileDataItem key={eachData.id}>
      {
        <>
          <FaGreaterThan color="#18d26e" size={15} />
          <DataHeading>{eachData.dataHeading}</DataHeading>
          <span>{eachData.dataContent}</span>
        </>
      }
    </ProfileDataItem>
  );
};

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <AboutBgContainer>
        <AboutHeading>LEARN MORE ABOUT ME</AboutHeading>
        <AboutContainer>
          <MyPassion>Web Developer</MyPassion>
          <MyPassionDescription>
            I'm a passionate Web Developer with strong{" "}
            <Span>frontend-and-backend technologies</Span>. I graduated from
            Siddhartha Institute of Engineering and Technology with a degree in
            Electrical and Electronics Engineering. Since then I had an interest
            and passion for IT as the IT industry has evolved rapidly and has
            experienced growth, and success, and offers a variety of wide range
            of career opportunities.{" "}
            <Span>
              so, I can use my skills to provide a sense of fulfillment and the
              opportunity to work on cutting-edge technologies that shape
              industries and society
            </Span>
            .
          </MyPassionDescription>
          <ProfileDataContainer>
            {profileData.map((eachData) => renderProjectData(eachData))}
          </ProfileDataContainer>
        </AboutContainer>

        <SkillsHeading>skills</SkillsHeading>

        <SkillsContainer>
          {skillData.map((skill) => (
            <SkillItem key={skill.id}>
              <SkillNameContainer>
                <SkillDetails>{skill.skill}</SkillDetails>
                <SkillDetails>{skill.percentage}</SkillDetails>
              </SkillNameContainer>
              <SkillPercentageContainer>
                <SkillPercentage
                  width={`${skill.percentage}`}
                ></SkillPercentage>
              </SkillPercentageContainer>
            </SkillItem>
          ))}
        </SkillsContainer>
      </AboutBgContainer>
    </motion.div>
  );
}

export default About;
