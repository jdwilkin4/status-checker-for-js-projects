import type { NextPage } from "next";
import { ProjectTemplate } from "../../components/ProjectTemplate";
import { statsCalculator } from "../../data";

const StatsCalculator: NextPage = () => (
  <ProjectTemplate
    conceptsArr={statsCalculator}
    title="Learn Advanced Array Methods by Building a Statistics Calculator"
  />
);

export default StatsCalculator;
