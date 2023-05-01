import type { NextPage } from "next";
import { ProjectTemplate } from "../../components/ProjectTemplate";
import { numberSorter } from "../../data";

const NumberSorter: NextPage = () => (
  <ProjectTemplate
    conceptsArr={numberSorter}
    title="Learn Basic Algorithmic Thinking by Building a Number Sorter"
  />
);

export default NumberSorter;
