import type { NextPage } from "next";
import { ProjectTemplate } from "../../components/ProjectTemplate";
import { romanNumeralConverter, firstNineProjects } from "../../data";

const RomanNumeralConverter: NextPage = () => (
  <ProjectTemplate
    currCombinedProjectsArr={firstNineProjects}
    conceptsArr={romanNumeralConverter}
    title="Roman Numeral Converter"
  />
);

export default RomanNumeralConverter;
