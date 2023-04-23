import type { NextPage } from "next";
import Head from "next/head";
import { Heading, Box, Center } from "@chakra-ui/react";

const Home: NextPage = () => {
  const title: string = "Current status for freeCodeCamp JavaScript Projects";
  return (
    <Box bg="grey">
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Center>
          <Heading role="heading" as="h1" color="white" mt={8} p={4}>
            {title}
          </Heading>
        </Center>
      </Box>
    </Box>
  );
};

export default Home;
