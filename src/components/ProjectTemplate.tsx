import { CheckIcon } from "@chakra-ui/icons";
import {
  Heading,
  Box,
  List,
  ListItem,
  ListIcon,
  Grid,
  useMediaQuery,
  Center,
  Text,
} from "@chakra-ui/react";
import { ConceptsArr } from "../pages/types";
import { HomeLink } from "./HomeLink";
import { CustomLink } from "./CustomLink";

type Props = {
  title?: string;
  conceptsArr: ConceptsArr;
  sampleLink?: string;
  userStories?: string;
};

export const ProjectTemplate = ({
  title,
  conceptsArr,
  userStories,
  sampleLink,
}: Props) => {
  const [isTabletSizeOrLarger] = useMediaQuery("(min-width: 768px)");

  return (
    <Box textAlign="center" color="white" bg="grey">
      <Heading role="heading" as="h1">
        {title}
      </Heading>

      <Heading my={4} role="heading" as="h2">
        Concepts Covered
      </Heading>

      {sampleLink && (
        <CustomLink
          color="white"
          title=" View Sample"
          isExternalLink={true}
          link={sampleLink}
        />
      )}

      {userStories && (
        <CustomLink
          color="white"
          title="   View User Stories"
          isExternalLink={true}
          link={userStories}
        />
      )}

      {conceptsArr.length ? (
        <List my={8} spacing={3}>
          {isTabletSizeOrLarger ? (
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <ListItems conceptsArr={conceptsArr} />
            </Grid>
          ) : (
            <ListItems conceptsArr={conceptsArr} />
          )}
        </List>
      ) : (
        <Center>
          <Text fontSize="2xl">
            Prototype currently being built out. Final list of concepts coming
            soon.
          </Text>
        </Center>
      )}

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
