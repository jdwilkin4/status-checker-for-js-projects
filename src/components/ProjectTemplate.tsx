import { CheckIcon } from "@chakra-ui/icons";
import {
  Heading,
  Box,
  Link,
  Text,
  List,
  ListItem,
  ListIcon,
  Grid,
} from "@chakra-ui/react";
import { ConceptsArr } from "../pages/types";
import NextLink from "next/link";

type Props = {
  title: string;
  conceptsArr: ConceptsArr;
};

export const ProjectTemplate = ({ title, conceptsArr }: Props) => {
  return (
    <Box textAlign="center" color="white" bg="grey">
      <Heading role="heading" as="h1">
        {title}
      </Heading>

      <Heading mt={4} role="heading" as="h2">
        Concepts Covered
      </Heading>

      <List my={8} spacing={3}>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          {conceptsArr.map((concept, index) => (
            <ListItem key={`${concept}-${index}`} fontSize="2xl">
              <ListIcon as={CheckIcon} color="green.500" />
              {concept}
            </ListItem>
          ))}
        </Grid>
      </List>

      <Text fontSize="2xl">
        <NextLink href="/" passHref>
          <Link>Return Home</Link>
        </NextLink>
      </Text>
    </Box>
  );
};
