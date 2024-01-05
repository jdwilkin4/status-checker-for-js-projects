import type { NextPage } from "next";
import { ProjectTemplate } from "../../components/ProjectTemplate";
import { spamFilter, firstThirteenProjects } from "../../data";

const SpamFilter: NextPage = () => (
  <ProjectTemplate
    currCombinedProjectsArr={firstThirteenProjects}
    conceptsArr={spamFilter}
    title="Learn Regular Expressions by Building a Spam Filter"
  />
);

export default SpamFilter;
