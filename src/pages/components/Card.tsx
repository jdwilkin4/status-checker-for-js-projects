import { Flex, Text, Link, Tag, TagLabel } from "@chakra-ui/react";
import { CardLabels } from "../types";

import NextLink from "next/link";

export const ProjectCard = ({ status, title, color }: CardLabels) => {
  return (
    <Flex
      justifyContent="center"
      direction="column"
      h="40"
      w="lg"
      p="4"
      backgroundColor="white"
    >
      <Text textAlign="center" fontSize="2xl">
        <NextLink href="/" passHref>
          <Link color="grey">{title}</Link>
        </NextLink>
      </Text>

      <Tag
        margin="auto"
        marginTop="2"
        w="36"
        size="md"
        borderRadius="full"
        variant="solid"
        backgroundColor={color}
      >
        <TagLabel margin="auto" fontSize="md">
          {status}
        </TagLabel>
      </Tag>
    </Flex>
  );
};
