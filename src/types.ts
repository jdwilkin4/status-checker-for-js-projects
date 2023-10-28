import { LIST_OF_CONCEPTS_TAUGHT } from "./constants";

type Status =
  | "Complete"
  | "In Review"
  | "WIP Steps"
  | "WIP Prototype"
  | "Needs Prototype"
  | "Needs Steps";

type AccentColors =
  | "accentColors.green"
  | "accentColors.purple"
  | "accentColors.yellow"
  | "accentColors.red"
  | "accentColors.blue";

type Assignees =
  | "Estefania"
  | "Jessica"
  | "Joy"
  | "Kris"
  | "Naomi"
  | "Kolade"
  | "Rafael"
  | "Zaira"
  | "Available to pick up"
  | "Kolade and Larry";

export type CardLabels = {
  title: string;
  status: Status;
  color: AccentColors;
  isCertification?: boolean;
  assigned?: Assignees;
};

export type ConceptsArr = typeof LIST_OF_CONCEPTS_TAUGHT[number][];
