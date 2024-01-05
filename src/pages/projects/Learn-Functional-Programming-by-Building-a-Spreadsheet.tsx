import type { NextPage } from "next";
import { ProjectTemplate } from "../../components/ProjectTemplate";
import { spreadsheetProject, firstTwelveProjects } from "../../data";

const SpreadsheetProject: NextPage = () => (
  <ProjectTemplate
    currCombinedProjectsArr={firstTwelveProjects}
    conceptsArr={spreadsheetProject}
    title="Learn Functional Programming by Building a Spreadsheet"
  />
);

export default SpreadsheetProject;
