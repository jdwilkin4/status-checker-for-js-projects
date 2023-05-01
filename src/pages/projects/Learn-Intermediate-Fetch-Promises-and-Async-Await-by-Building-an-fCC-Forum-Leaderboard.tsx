import type { NextPage } from "next";
import { ProjectTemplate } from "../../components/ProjectTemplate";
import { fccForumLeaderboard } from "../../data";

const ForumLeaderboard: NextPage = () => (
  <ProjectTemplate
    conceptsArr={fccForumLeaderboard}
    title="Learn Intermediate Fetch, Promises, and Async / Await by Building an fCC Forum Leaderboard"
  />
);

export default ForumLeaderboard;
