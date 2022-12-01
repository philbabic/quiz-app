import { ChakraTheme, extendTheme } from "@chakra-ui/react";

const colors: ChakraTheme["colors"] = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const fonts: ChakraTheme["fonts"] = {
  heading: "'Montserrat', 'Trebuchet MS', sans-serif",
  body: "'Montserrat', 'Trebuchet MS', sans-serif",
};

export const theme = extendTheme({ colors, fonts });