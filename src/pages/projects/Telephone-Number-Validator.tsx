import type { NextPage } from "next";
import { ProjectTemplate } from "../../components/ProjectTemplate";
import { telephoneValidator } from "../../data";
import { USER_STORIES } from "../../constants";

const TelephoneNumberValidator: NextPage = () => (
  <ProjectTemplate
    userStories={USER_STORIES}
    conceptsArr={telephoneValidator}
    title="Telephone Number Validator"
  />
);

export default TelephoneNumberValidator;
