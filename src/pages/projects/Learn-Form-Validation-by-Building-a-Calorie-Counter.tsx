import type { NextPage } from "next";
import { ProjectTemplate } from "../../components/ProjectTemplate";
import { calorieCounter } from "../../data";

const CalorieCounter: NextPage = () => (
  <ProjectTemplate
    conceptsArr={calorieCounter}
    title="Learn Form Validation by Building a Calorie Counter"
  />
);

export default CalorieCounter;
