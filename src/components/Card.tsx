import { Flex, Text, Tag, TagLabel, Center } from "@chakra-ui/react";
import { CardLabels } from "../pages/types";
import { CustomLink } from "./CustomLink";

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

      <CustomLink
        link={`/projects/${title.split(" ").join("-")}`}
        title={title}
        isExternalLink={false}
        color="grey"
      />

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
