import type { NextPage } from "next";
import { ProjectTemplate } from "../../components/ProjectTemplate";
import { fccForumLeaderboard } from "../../data";

const ForumLeaderboard: NextPage = () => (
  <ProjectTemplate
    conceptsArr={fccForumLeaderboard}
    title="Learn Asynchronous Programming by Building an fCC Forum Leaderboard"
    PRLink="https://github.com/freeCodeCamp/freeCodeCamp/pull/50241"
  />
);

export default ForumLeaderboard;
