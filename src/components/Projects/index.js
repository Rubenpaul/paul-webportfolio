import React from "react";

import { motion } from "framer-motion";

import {
  ProjectBgContainer,
  ProjectMainHeading,
  ProjectsContainer,
  ProjectSubHeading,
  Project,
  ProjectItem,
  ArrowIcon,
  ProjectDetailsContainer,
  ProjectName,
  TechnologiesUsed,
  Span,
  ProjetDescription,
  ProjectKeyFeaturesList,
  ProjectFeature,
  ProjectKeyFeature,
  ProjectAppLinkContainer,
  AppLink,
} from "./styledComponents";

const technologiesText = "Technologics used: ";

const projectData = [
  {
    projectId: 1,
    projectName: "Movies App (Netflix/Amazon Prime Clone)",
    appLink: "https://paulmoviesapp.ccbp.tech/",
    technologiesUsed:
      "HTML, CSS, JavaScript, React JS, Bootstrap, React Slick, Figma, client storage.",
    projectDescription:
      "Implemented responsive OTT platform app like Netflix/Amazon Clone where users can see movies like popular, trending, top-rated, and also can search movies and view specific movie details.",
    keyFeatures: [
      {
        id: 1,
        text: "Implemented different routes for features like login, home, popular, profileby using React Router components Route, Switch, Link.",
      },
      {
        id: 2,
        text: "Implemented horizontal scrolling (In trending, top-rated, and originalssections) using React Third Party library called React Slick.",
      },
      {
        id: 3,
        text: "Used Figma mockups to implement UI-rich and pixel-perfect React components.",
      },
      {
        id: 4,
        text: "Explored open-source APIs for movies database and picked TMDb APIs for authentication, movies by category, and movie search APIs",
      },
      {
        id: 5,
        text: "Implemented username and password authentication and persisted login state using client storage.",
      },
      {
        id: 6,
        text: "Implemented a protected route to ensure only authenticated users can access the pages like user profile, movies by category, etc.",
      },
    ],
  },

  {
    projectId: 2,
    projectName: "Countries Search",
    appLink: "https://paulcountrysrch.ccbp.tech/",
    technologiesUsed: "HTML, CSS, JS, REST API Calls, Bootstrap",
    projectDescription:
      "Developed responsive countries search application which shows all countries and respective population in the world. We can also search by specific country",
    keyFeatures: [
      {
        id: 1,
        text: "Fetched countries list from server asynchronously using fetch GET HTTP API call and implemented responsiveness using Bootstrap grid system and CSS box model.",
      },
      {
        id: 2,
        text: "Implemented local search functionality by using input element, JavaScript event listeners & filtered countries using Array filter method.",
      },
    ],
  },

  {
    projectId: 3,
    projectName: "E Commerce Website",
    appLink: "https://paulecommerce.ccbp.tech/",
    technologiesUsed: "HTML, CSS, Bootstrap",
    projectDescription:
      "Developed E Commerce website where users can go through different products, detailed information about a product, offers and contact us info.",
    keyFeatures: [
      {
        id: 1,
        text: "Designed page using following HTML structure elements and footer elements by using different bootstrap components to show different sections in the website and different bootstrap classes for responsiveness through mobile-first approach.",
      },
      {
        id: 2,
        text: "Implemented product youtube videos by using bootstrap embed and model components and displayed multiple images of offers in a carousel using bootstrap carousel.",
      },
    ],
  },
];

const renderProjects = () => {
  return (
    <Project>
      {projectData.map((project) => (
        <ProjectItem key={project.projectId}>
          <ArrowIcon />
          <ProjectDetailsContainer>
            <ProjectAppLinkContainer>
              <ProjectName>{project.projectName} </ProjectName>
              <AppLink
                href={project.appLink}
                target="_blank"
              >{`Applink: ${project.appLink}`}</AppLink>
            </ProjectAppLinkContainer>

            <TechnologiesUsed>
              {technologiesText} <Span>{project.technologiesUsed}</Span>
            </TechnologiesUsed>
            <ProjetDescription>{project.projectDescription}</ProjetDescription>
            <ProjectKeyFeaturesList>
              {project.keyFeatures.map((feature) => (
                <ProjectFeature key={feature.id}>
                  <ProjectKeyFeature>{feature.text}</ProjectKeyFeature>
                </ProjectFeature>
              ))}
            </ProjectKeyFeaturesList>
          </ProjectDetailsContainer>
        </ProjectItem>
      ))}
    </Project>
  );
};

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <ProjectBgContainer>
        <ProjectMainHeading>HEY! CHECK OUT MY PROJECTS</ProjectMainHeading>
        <ProjectsContainer>
          <ProjectSubHeading>My Projects</ProjectSubHeading>
          {renderProjects()}
        </ProjectsContainer>
      </ProjectBgContainer>
    </motion.div>
  );
}

export default Projects;
