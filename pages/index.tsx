import { Box, Text } from "@chakra-ui/layout";
import type { NextPage } from "next";
import Main from "../layouts/Main";

const Home: NextPage = () => {
  return (
    <Main title="dr34m">
      <Text as="h1" fontWeight="black" fontSize="6xl" textAlign="center">
        dr34m
      </Text>

      <Box py={8} maxW={{ base: "100vw", lg: "1280px", xl: "1280px" }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti,
        laboriosam consequuntur molestiae quas obcaecati quae voluptatibus vel
        ullam eos velit! Facilis, cupiditate delectus optio ipsum fuga quod ea
        veniam in!
      </Box>
    </Main>
  );
};

export default Home;
