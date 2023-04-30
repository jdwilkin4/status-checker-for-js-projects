import { Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";

type Props = {
  link: string;
  title: string;
  isExternalLink: boolean;
  color: string;
};

export const CustomLink = ({ link, title, isExternalLink, color }: Props) => {
  return (
    <Text textAlign="center" fontSize="2xl">
      <NextLink href={link} passHref>
        <Link target={isExternalLink ? "_blank" : "_self"} color={color}>
          {title}
        </Link>
      </NextLink>
    </Text>
  );
};
