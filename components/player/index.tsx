import { Flex, Text } from "@chakra-ui/layout";
import React from "react";
import player from "../../styles/player.module.css";

type PlayerProps = React.DetailedHTMLProps<
  React.AudioHTMLAttributes<HTMLAudioElement>,
  HTMLAudioElement
> & {
  autoPlay: boolean;
  controls: boolean;
  src: string;
};

const Player: React.FC<PlayerProps> = ({ autoPlay, controls, src }) => {
  return (
    <Flex
      w="100%"
      justifyContent="space-between"
      position="absolute"
      bottom="0"
      alignItems="center"
      bgColor="#ddd"
    >
      <audio
        autoPlay={autoPlay}
        controls={controls}
        src={src}
        className={player.audio}
      ></audio>
      <Text
        as="h1"
        fontWeight="bold"
        fontSize="3xl"
        textAlign="center"
        px={8}
        color="#111"
      >
        dr34m radio
      </Text>
    </Flex>
  );
};

export default Player;
