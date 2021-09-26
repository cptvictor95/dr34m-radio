import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
    },
  },
  fonts: {
    body: "Poppins",
  },
  components: {
    Button: {
      variants: {
        solid: {
          color: "#fff",
          bgColor: "#222",

          _hover: {
            bgColor: "#333",
          },
        },
      },
    },
  },
});
