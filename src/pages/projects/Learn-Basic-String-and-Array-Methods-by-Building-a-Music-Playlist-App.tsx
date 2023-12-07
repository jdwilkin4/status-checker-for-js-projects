import type { NextPage } from "next";
import { ProjectTemplate } from "../../components/ProjectTemplate";
import { musicPlayer, firstThreeProjects } from "../../data";

const MusicPlayer: NextPage = () => (
  <ProjectTemplate
    conceptsArr={musicPlayer}
    currCombinedProjectsArr={firstThreeProjects}
    title="Learn Basic String and Array Methods by Building a Music Playlist App"
    PRLink="https://github.com/freeCodeCamp/freeCodeCamp/pull/52487"
  />
);

export default MusicPlayer;
