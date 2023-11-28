import { ConceptsArr } from "./types";

export const getConceptFrequencyCount = (arr: ConceptsArr): Map<any, any> => {
  const map = new Map();

  for (let concept of arr) {
    if (map.has(concept)) {
      let currentCount = map.get(concept);
      map.set(concept, currentCount + 1);
    } else {
      map.set(concept, 1);
    }
  }
  return map;
};

export const sortConceptsArr = (arr: ConceptsArr): ConceptsArr => {
  const uniqueArr = new Set(arr);
  return Array.from(uniqueArr).sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase())
  );
};
