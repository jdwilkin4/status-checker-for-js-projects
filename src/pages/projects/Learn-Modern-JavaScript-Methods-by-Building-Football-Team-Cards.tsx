import type { NextPage } from "next";
import { ProjectTemplate } from "../../components/ProjectTemplate";
import { footballTeamCards } from "../../data";

const FootballTeamCards: NextPage = () => (
  <ProjectTemplate
    conceptsArr={footballTeamCards}
    title="Learn Modern JavaScript Methods by Building Football Team Cards"
  />
);

export default FootballTeamCards;
