import type { NextPage } from "next";
import { ProjectTemplate } from "../../components/ProjectTemplate";
import { fccAuthorsPage } from "../../data";

const AuthorsPage: NextPage = () => (
  <ProjectTemplate
    conceptsArr={fccAuthorsPage}
    title="Learn Fetch and Promises by Building an fCC Authors Page"
  />
);

export default AuthorsPage;
