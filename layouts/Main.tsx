import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Player from "../components/Player";

const Main: React.FC<{ children: React.ReactNode; title: string }> = ({
  children,
  title,
}) => {
  return (
    <Flex
      as="main"
      w="100%"
      h="100%"
      minH="100vh"
      direction="column"
      align="center"
    >
      <Head>
        <title>{title}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          {"audio::-webkit-media-controls-timeline { display:none; }"}
        </style>
      </Head>
      <Header />

      {children}
      <Player
        autoPlay={false}
        controls={true}
        src="https://ssl.srvstm.com:19480/;%22%3E"
      />
    </Flex>
  );
};

export default Main;
