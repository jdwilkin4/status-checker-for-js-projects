import { Box, Text, Tag, TagLabel } from "@chakra-ui/react";
import { CardLabels } from "../types";
import Link from "next/link";

export const ProjectCard = ({ status, title, color }: CardLabels) => {
  return (
    <Box w="lg" backgroundColor="white">
      <Text fontSize="2xl" color="grey">
        {title}
      </Text>

      <Tag
        size="md"
        key="md"
        borderRadius="full"
        variant="solid"
        backgroundColor={color}
      >
        <TagLabel>{status}</TagLabel>
      </Tag>
    </Box>
  );
};
