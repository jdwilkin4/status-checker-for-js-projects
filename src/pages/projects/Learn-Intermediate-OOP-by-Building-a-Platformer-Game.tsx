import type { NextPage } from "next";
import { ProjectTemplate } from "../../components/ProjectTemplate";
import { platformerGamer } from "../../data";

const PlatformerGame: NextPage = () => (
  <ProjectTemplate
    conceptsArr={platformerGamer}
    title="Learn Intermediate OOP by Building a Platformer Game"
    PRLink="https://github.com/freeCodeCamp/freeCodeCamp/pull/50385"
  />
);

export default PlatformerGame;
