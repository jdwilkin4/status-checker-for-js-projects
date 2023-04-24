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
