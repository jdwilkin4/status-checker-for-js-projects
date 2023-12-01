import type { NextPage } from "next";
import { ProjectTemplate } from "../../components/ProjectTemplate";
import { dateFormatter, firstFourProjects } from "../../data";

const DateFormatter: NextPage = () => (
  <ProjectTemplate
    conceptsArr={dateFormatter}
    currCombinedProjectsArr={firstFourProjects}
    title="Learn the Date Object By Building a Date Formatter"
  />
);

export default DateFormatter;
