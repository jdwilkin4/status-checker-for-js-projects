import type { NextPage } from "next";
import { ProjectTemplate } from "../../components/ProjectTemplate";
import { romanNumeralConverter } from "../../data";
import { USER_STORIES } from "../../constants";

const RomanNumeralConverter: NextPage = () => (
  <ProjectTemplate
    userStories={USER_STORIES}
    conceptsArr={romanNumeralConverter}
    title="Roman Numeral Converter"
  />
);

export default RomanNumeralConverter;
