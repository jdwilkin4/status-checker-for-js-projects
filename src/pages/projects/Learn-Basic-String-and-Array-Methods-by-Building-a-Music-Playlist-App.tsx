import type { NextPage } from "next";
import { ProjectTemplate } from "../../components/ProjectTemplate";
import { musicPlayer } from "../../data";

const MusicPlayer: NextPage = () => (
  <ProjectTemplate
    conceptsArr={musicPlayer}
    title="Learn Basic String and Array Methods by Building a Music Playlist App"
    PRLink="https://github.com/freeCodeCamp/CurriculumExpansion/pull/338"
  />
);

export default MusicPlayer;
