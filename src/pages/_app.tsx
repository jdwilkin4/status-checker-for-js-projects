import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// you can extend the theme and add custom colors, font styles, etc.
const colors = {
  grey: "#0a0a23",
  white: "#ffffff",
  accentColors: {
    purple: "#dbb8ff",
    yellow: "#f1be32",
    blue: "#99c9ff",
    green: "#acd157",
    red: "#ff0000",
  },
};

const fontWeights = {
  normal: 400,
  medium: 600,
  bold: 800,
};

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
};

export const theme = extendTheme({ colors, fontWeights, breakpoints });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
