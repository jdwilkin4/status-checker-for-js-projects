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
    "event.onclick",
    "Declaring a function",
    "el.innerText",
    "Escape sequences: , \n, etc.",
    "Arguments / parameters",
    "Basic object usage ",
    "el.style",
    "Bracket notation",
    "Code lines end with a semi-colon",
    "invoke function",
    "Greater than or equal: >=",
    "Less than or equal: <=",
    "Greater than: >",
    "Less than: <",
    "if...else statement",
    "Subtraction assignment -=",
    "Less than: <",
    "Increment: ++",
    "Decrement: --",
    "Dot notation",
    "Concatenation",
    "arr.push()",
    "Compound assignment: +=",
    "arr.shift()",
    "Math.floor()",
    "Math.random()",
    "Strict equality: ===",
    "Ternary operator",
    "arr.length",
    "Strict inequality: !==",
    "arr.pop()",
    "Logical AND: &&",
    "return statement",
    "Logical OR: ||",
    "while loop",
    "for loop",
    "arr.indexOf()",
  ];
  return (
    <ProjectTemplate
      conceptsArr={rpgGameConcepts}
      title="Learn Basic JavaScript by Building a Role Playing Game"
    />
  );
};

export default RPGGame;
