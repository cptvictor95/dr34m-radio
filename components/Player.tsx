import React from "react";

const Player: React.FC<{ autoPlay: boolean; controls: boolean; src: string }> =
  ({ autoPlay, controls, src }) => {
    return (
      <div>
        <audio autoPlay={autoPlay} controls={controls} src={src}></audio>
      </div>
    );
  };

export default Player;
