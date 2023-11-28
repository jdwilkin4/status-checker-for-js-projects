import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { ConceptsArr } from "../types";
import { getConceptFrequencyCount } from "../utils";
import clsx from "clsx";

type ConceptsTableProps = {
  caption: string;
  conceptArr: ConceptsArr;
  currCombinedProjectsArr?: ConceptsArr;
};

export const ConceptTable = ({
  caption,
  conceptArr,
  currCombinedProjectsArr = conceptArr,
}: ConceptsTableProps) => {
  const frequencyMap = getConceptFrequencyCount(currCombinedProjectsArr);

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>{caption}</TableCaption>
        <Thead>
          <Tr>
            <Th style={{ color: "white" }}>Concept</Th>
            <Th style={{ color: "white" }}>Frequency</Th>
          </Tr>
        </Thead>
        <Tbody>
          {conceptArr.map((concept) => {
            const frequencyCount = frequencyMap.get(concept);
            return (
              <Tr
                className={clsx(frequencyCount === 1 && "bg-color")}
                key={concept}
              >
                <Td>{concept}</Td>
                <Td>{frequencyCount}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
