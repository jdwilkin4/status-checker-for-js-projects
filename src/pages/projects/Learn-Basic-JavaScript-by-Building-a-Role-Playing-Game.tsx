import type { NextPage } from "next";
import { ProjectTemplate } from "../../components/ProjectTemplate";
import { ConceptsArr } from "../types";

const RPGGame: NextPage = () => {
  const rpgGameConcepts: ConceptsArr = ["arr.concat()"];
  return (
    <ProjectTemplate
      conceptsArr={rpgGameConcepts}
      title="Learn Basic JavaScript by Building a Role Playing Game"
    />
  );
};

export default RPGGame;
