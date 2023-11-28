import { Heading, Box } from "@chakra-ui/react";
import { ConceptsArr } from "../types";
import { HomeLink } from "./HomeLink";
import { CustomLink } from "./CustomLink";
import { ConceptTable } from "./Table";

type Props = {
  title?: string;
  conceptsArr: ConceptsArr;
  sampleLink?: string;
  userStories?: string;
  PRLink?: string;
};

export const ProjectTemplate = ({
  title,
  conceptsArr,
  userStories,
  sampleLink,
  PRLink,
}: Props) => {
  return (
    <Box textAlign="center" color="white" bg="grey">
      <Heading role="heading" as="h1">
        {title}
      </Heading>

      {PRLink && (
        <CustomLink
          color="white"
          title="Link to PR"
          isExternalLink={true}
          link={PRLink}
        />
      )}

      {sampleLink && (
        <CustomLink
          color="white"
          title="View Sample"
          isExternalLink={true}
          link={sampleLink}
        />
      )}

      {userStories && (
        <CustomLink
          color="white"
          title="View User Stories"
          isExternalLink={true}
          link={userStories}
        />
      )}

      <ConceptTable
        conceptArr={conceptsArr}
        caption={`Concepts for ${title}`}
      />

      <HomeLink />
    </Box>
  );
};
