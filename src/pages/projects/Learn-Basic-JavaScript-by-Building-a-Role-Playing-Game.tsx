import type { NextPage } from "next";
import { ProjectTemplate } from "../../components/ProjectTemplate";
import { rpgGameConcepts } from "../../data";

const RPGGame: NextPage = () => (
  <ProjectTemplate
    conceptsArr={rpgGameConcepts}
    title="Learn Basic JavaScript by Building a Role Playing Game"
  />
);

export default RPGGame;
