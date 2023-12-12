import type { NextPage } from "next";
import { ProjectTemplate } from "../../components/ProjectTemplate";
import { recursionProject, firstEightProjects } from "../../data";

const RecursionProject: NextPage = () => (
  <ProjectTemplate
    conceptsArr={recursionProject}
    currCombinedProjectsArr={firstEightProjects}
    title="Learn Recursion by Building a Decimal to Binary Converter"
    PRLink="https://github.com/freeCodeCamp/freeCodeCamp/pull/50438"
  />
);

export default RecursionProject;
