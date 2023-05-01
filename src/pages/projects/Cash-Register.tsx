import type { NextPage } from "next";
import { ProjectTemplate } from "../../components/ProjectTemplate";
import { cashRegister } from "../../data";
import { USER_STORIES } from "../../constants";

const CashRegister: NextPage = () => (
  <ProjectTemplate
    userStories={USER_STORIES}
    conceptsArr={cashRegister}
    title="Cash Register"
  />
);

export default CashRegister;
