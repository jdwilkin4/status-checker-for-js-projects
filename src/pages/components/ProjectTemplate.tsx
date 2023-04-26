import { Heading } from "@chakra-ui/react";
import Link from "next/link";

type Props = { title: string };

export const ProjectTemplate = ({ title }: Props) => {
  return (
    <>
      <Heading as="h1">{title}</Heading>
      <Link href="/">Return Home</Link>
    </>
  );
};
