import { Button } from "@chakra-ui/button";
import { Flex, Text } from "@chakra-ui/layout";
import { useRouter } from "next/dist/client/router";
import React from "react";

const Header = () => {
  const router = useRouter();

  const goTo = (route: string) => {
    return router.push(route);
  };

  return (
    <Flex
      as="header"
      w="100%"
      justify="space-between"
      align="center"
      px={8}
      maxW={{ base: "100vw", lg: "1280px", xl: "1280px" }}
    >
      <Text as="h1" fontWeight="black" fontSize="6xl" textAlign="center">
        dr34m
      </Text>
      <Flex as="nav" w="20vw" justify="space-between">
        <Button onClick={() => goTo("/")}>Home</Button>
        <Button onClick={() => goTo("/radio")}>Radio</Button>
      </Flex>
    </Flex>
  );
};

export default Header;
