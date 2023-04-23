import type { NextPage } from "next";
import Head from "next/head";
import { Heading, Box, Center, Flex } from "@chakra-ui/react";
import { ProjectCard } from "./components/Card";
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
          <Heading role="heading" as="h1" color="white" mt={8} p={4}>
            {title}
          </Heading>
        </Center>
        <Flex alignItems="center" gap="2" wrap="wrap">
          {PROJECT_STATUS_LIST.map(({ title, status, color }) => (
            <ProjectCard
              key={title}
              title={title}
              status={status}
              color={color}
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
