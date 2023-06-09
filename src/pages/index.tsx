import type { NextPage } from "next";
import Head from "next/head";
import { Heading, Box, Center, Flex } from "@chakra-ui/react";
import { ProjectCard } from "../components/Card";
import { PROJECT_STATUS_LIST } from "../constants";

const Home: NextPage = () => {
  const title: string = "Current status for freeCodeCamp JavaScript Projects";

  return (
    <Box>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bg="grey">
        <Center>
          <Heading role="heading" as="h1" color="white" my={8} p={4}>
            {title}
          </Heading>
        </Center>
        <Flex justifyContent="center" alignItems="center" gap="6" wrap="wrap">
          {PROJECT_STATUS_LIST.map(
            ({ title, status, color, isCertification, assigned }) => (
              <ProjectCard
                key={title}
                title={title}
                status={status}
                color={color}
                isCertification={isCertification}
                assigned={assigned}
              />
            )
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
