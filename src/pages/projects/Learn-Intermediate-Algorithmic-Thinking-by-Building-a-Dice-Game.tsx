import type { NextPage } from "next";
import { ProjectTemplate } from "../../components/ProjectTemplate";
import { diceGame } from "../../data";

const DiceGame: NextPage = () => (
  <ProjectTemplate
    conceptsArr={diceGame}
    title="Learn Intermediate Algorithmic Thinking by Building a Dice Game"
  />
);

export default DiceGame;
