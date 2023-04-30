import type { NextPage } from "next";
import { ProjectTemplate } from "../../components/ProjectTemplate";
import { palindromeChecker } from "../../data";
import { USER_STORIES } from "../../constants";

const PalindromeChecker: NextPage = () => (
  <ProjectTemplate
    sampleLink="https://28oi0m.csb.app/"
    userStories={USER_STORIES}
    conceptsArr={palindromeChecker}
    title="Palindrome Checker"
  />
);

export default PalindromeChecker;
