import type { NextPage } from "next";
import { ProjectTemplate } from "../../components/ProjectTemplate";
import { numberSorter, firstTenProjects } from "../../data";

const NumberSorter: NextPage = () => (
  <ProjectTemplate
    currCombinedProjectsArr={firstTenProjects}
    conceptsArr={numberSorter}
    title="Learn Basic Algorithmic Thinking by Building a Number Sorter"
  />
);

export default NumberSorter;
