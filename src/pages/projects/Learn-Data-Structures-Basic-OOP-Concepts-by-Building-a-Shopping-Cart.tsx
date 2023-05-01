import type { NextPage } from "next";
import { ProjectTemplate } from "../../components/ProjectTemplate";
import { shoppingCart } from "../../data";

const ShoppingCartProject: NextPage = () => (
  <ProjectTemplate
    conceptsArr={shoppingCart}
    title="Learn Data Structures / Basic OOP Concepts by Building a Shopping Cart"
  />
);

export default ShoppingCartProject;
