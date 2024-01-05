import type { NextPage } from "next";
import { ProjectTemplate } from "../../components/ProjectTemplate";
import { statsCalculator, firstElevenProjects } from "../../data";

const StatsCalculator: NextPage = () => (
  <ProjectTemplate
    currCombinedProjectsArr={firstElevenProjects}
    conceptsArr={statsCalculator}
    title="Learn Advanced Array Methods by Building a Statistics Calculator"
  />
);

export default StatsCalculator;
