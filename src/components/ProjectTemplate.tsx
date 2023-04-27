import { CheckIcon } from "@chakra-ui/icons";
import {
  Heading,
  Box,
  Link,
  Text,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

import NextLink from "next/link";

type Props = { title: string };

export const ProjectTemplate = ({ title }: Props) => {
  return (
    <Box textAlign="center" color="white" bg="grey">
      <Heading role="heading" as="h1">
        {title}
      </Heading>

      <Heading mt={4} role="heading" as="h2">
        Concepts Covered
      </Heading>

      <List my={8} spacing={3}>
        <ListItem fontSize="2xl">
          <ListIcon as={CheckIcon} color="green.500" />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </ListItem>
      </List>

      <Text fontSize="2xl">
        <NextLink href="/" passHref>
          <Link>Return Home</Link>
        </NextLink>
      </Text>
    </Box>
  );
};
