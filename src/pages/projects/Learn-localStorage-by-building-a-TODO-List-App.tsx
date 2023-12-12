import type { NextPage } from "next";
import { ProjectTemplate } from "../../components/ProjectTemplate";
import { todoListApp, firstSevenProjects } from "../../data";

const TodoListApp: NextPage = () => (
  <ProjectTemplate
    currCombinedProjectsArr={firstSevenProjects}
    conceptsArr={todoListApp}
    title="Learn localStorage by building a TODO List App"
  />
);

export default TodoListApp;
