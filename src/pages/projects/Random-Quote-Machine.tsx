import type { NextPage } from "next";
import { ProjectTemplate } from "../../components/ProjectTemplate";
import { randomQuoteMachine } from "../../data";
import { USER_STORIES } from "../../constants";

const RandomQuoteMachine: NextPage = () => (
  <ProjectTemplate
    userStories={USER_STORIES}
    conceptsArr={randomQuoteMachine}
    title="Random Quote Machine"
  />
);

export default RandomQuoteMachine;
