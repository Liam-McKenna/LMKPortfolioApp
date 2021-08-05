import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Liam McKenna's <br />
        {" <Dev Portfolio />"}
      </SectionTitle>
      <SectionText>
        A skilled background in Graphic Design and creative problem solving with
        a strong education in Information Technology and Software Engineering.
        Currently working as a full stack web developer by day and studying
        System Information & Information Technology at Technology University
        Dublin in the late evenings. Current skillset focused on web platforms
        with particular interest in tech stacks like MERN (Mongo, Express,
        React, Node) with interest to expand into Web Assembly and Machine
        Learning applications.
      </SectionText>
      <Button
        onClick={() =>
          (window.location.href = "../files/LiamMcKenna-Resume.docx")
        }
      >
        Download Resume
      </Button>
      {/* <Button>Checkout My Github</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;
