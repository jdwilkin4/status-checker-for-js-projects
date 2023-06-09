import type { NextPage } from "next";
import { ProjectTemplate } from "../../components/ProjectTemplate";
import { spreadsheetProject } from "../../data";

const SpreadsheetProject: NextPage = () => (
  <ProjectTemplate
    conceptsArr={spreadsheetProject}
    title="Learn Functional Programming by Building a Spreadsheet"
    PRLink="https://github.com/freeCodeCamp/freeCodeCamp/pull/49970"
  />
);

export default SpreadsheetProject;
