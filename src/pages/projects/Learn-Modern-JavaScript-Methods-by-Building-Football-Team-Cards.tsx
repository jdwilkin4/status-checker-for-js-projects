import type { NextPage } from "next";
import { ProjectTemplate } from "../../components/ProjectTemplate";
import { footballTeamCards, firstSixProjects } from "../../data";

const FootballTeamCards: NextPage = () => (
  <ProjectTemplate
    currCombinedProjectsArr={firstSixProjects}
    conceptsArr={footballTeamCards}
    title="Learn Modern JavaScript Methods by Building Football Team Cards"
  />
);

export default FootballTeamCards;
