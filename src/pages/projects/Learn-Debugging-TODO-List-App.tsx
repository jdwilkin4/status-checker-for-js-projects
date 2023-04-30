import type { NextPage } from "next";
import { ProjectTemplate } from "../../components/ProjectTemplate";
import { todoListApp } from "../../data";

const TodoListApp: NextPage = () => (
  <ProjectTemplate
    conceptsArr={todoListApp}
    title="Learn Debugging TODO List App"
  />
);

export default TodoListApp;
