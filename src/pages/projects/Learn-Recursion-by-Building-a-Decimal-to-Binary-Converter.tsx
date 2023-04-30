import type { NextPage } from "next";
import { ProjectTemplate } from "../../components/ProjectTemplate";
import { recursionProject } from "../../data";

const RecursionProject: NextPage = () => (
  <ProjectTemplate
    conceptsArr={recursionProject}
    title="Learn Recursion by Building a Decimal to Binary Converter"
  />
);

export default RecursionProject;
