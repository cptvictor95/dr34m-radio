import React from "react";

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
    <div>
      <audio autoPlay={autoPlay} controls={controls} src={src}></audio>
    </div>
  );
};

export default Player;
