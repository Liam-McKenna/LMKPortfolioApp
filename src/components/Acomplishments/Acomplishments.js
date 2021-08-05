import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  {
    number: "Web Mastery",
    text: "Focus on mastering Web applications with interest in the future of Web Assembly.",
  },
  {
    number: "Machine Learning",
    text: "Dedicating time to Machine learning applications like TensorFlow to explore use case with existing project data.",
  },
  {
    number: "Community Fostering",
    text: "Help building the Developer Community in Dublin and greater Ireland.",
  },
  {
    number: "Robotics Automation",
    text: "Interest to explore more into the uses for automation scripting and AI modelling to mechanical engineering devices.",
  },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Future Goals and areas of research</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
