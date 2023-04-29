import { Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export const HomeLink = () => {
  return (
    <Text fontSize="2xl">
      <NextLink href="/" passHref>
        <Link>Return Home</Link>
      </NextLink>
    </Text>
  );
};
