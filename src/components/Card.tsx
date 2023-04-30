import { Flex, Text, Link, Tag, TagLabel, Center } from "@chakra-ui/react";
import { CardLabels } from "../pages/types";

import NextLink from "next/link";

export const ProjectCard = ({
  status,
  title,
  color,
  isCertification,
  assigned,
}: CardLabels) => {
  return (
    <Flex
      justifyContent="center"
      direction="column"
      h="40"
      w="lg"
      p="4"
      backgroundColor="white"
    >
      {isCertification && (
        <Center>
          <Text>Certification project</Text>
        </Center>
      )}

      <Text textAlign="center" fontSize="2xl">
        <NextLink href={`/projects/${title.split(" ").join("-")}`} passHref>
          <Link color="grey">{title}</Link>
        </NextLink>
      </Text>

      {assigned && assigned !== "Available to pick up" && (
        <Center>
          <Text fontSize="xl">Assigned: {assigned}</Text>
        </Center>
      )}

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
