import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Some of the technology stacks and tools I've used include:
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          {" "}
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            React.Js, Redux, php, Framer Motion, Bootstrap, Tailwind,
            Javascript, CSS, html
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          {" "}
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js, Express.Js, Next.Js, MongoDB, MySQL, Flask, Python, Java,
            Apache, Ubuntu
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>Tools and Misc</ListTitle>
          <ListParagraph>
            VSCode, Git, Github, ULM/ERD's, Photoshop, Premeie Pro, Firebase,
            Netlify, Heroku, Azure, AWS, Trello, TMetric, Datagrip
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
