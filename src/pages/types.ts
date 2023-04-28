import { LIST_OF_CONCEPTS_TAUGHT } from "../constants";

type Status =
  | "Complete"
  | "In Review"
  | "WIP Steps"
  | "WIP Prototype"
  | "Needs Prototype";

type AccentColors =
  | "accentColors.green"
  | "accentColors.purple"
  | "accentColors.yellow"
  | "accentColors.red"
  | "accentColors.blue";

export type CardLabels = {
  title: string;
  status: Status;
  color: AccentColors;
};

export type ConceptsArr = typeof LIST_OF_CONCEPTS_TAUGHT[number][];
