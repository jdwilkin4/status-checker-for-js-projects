import type { NextPage } from "next";
import { ProjectTemplate } from "../../components/ProjectTemplate";
import { ConceptsArr } from "../types";

const RPGGame: NextPage = () => {
  const rpgGameConcepts: ConceptsArr = [
    "<script> with the `src` attribute",
    "console.log()",
    "var",
    "Initializing with a value (string, number, etc.)",
    "Assignment: =",
    "camelCase",
    "let",
    "Basic string usage (single or double quotes, backticks)",
    "array",
    "document.querySelector()",
    "const",
    "Declaring a variable without initializing it",
    "Multi-line comments",
    "Single-line comments",
  ];
  return (
    <ProjectTemplate
      conceptsArr={rpgGameConcepts}
      title="Learn Basic JavaScript by Building a Role Playing Game"
    />
  );
};

export default RPGGame;
