import { CheckIcon } from "@chakra-ui/icons";
import {
  Heading,
  Box,
  List,
  ListItem,
  ListIcon,
  Grid,
  useMediaQuery,
} from "@chakra-ui/react";
import { ConceptsArr } from "../pages/types";

import { HomeLink } from "./HomeLink";

type Props = {
  title?: string;
  conceptsArr: ConceptsArr;
};

export const ProjectTemplate = ({ title, conceptsArr }: Props) => {
  const [isTabletSizeOrLarger] = useMediaQuery("(min-width: 768px)");

  return (
    <Box textAlign="center" color="white" bg="grey">
      <Heading role="heading" as="h1">
        {title}
      </Heading>

      <Heading mt={4} role="heading" as="h2">
        Concepts Covered
      </Heading>

      <List my={8} spacing={3}>
        {isTabletSizeOrLarger ? (
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <ListItems conceptsArr={conceptsArr} />
          </Grid>
        ) : (
          <ListItems conceptsArr={conceptsArr} />
        )}
      </List>

      <HomeLink />
    </Box>
  );
};

const ListItems = ({ conceptsArr }: Props) => {
  return (
    <>
      {conceptsArr.map((concept, index) => (
        <ListItem key={`${concept}-${index}`} fontSize="2xl">
          <ListIcon as={CheckIcon} color="green.500" />
          {concept}
        </ListItem>
      ))}
    </>
  );
};
