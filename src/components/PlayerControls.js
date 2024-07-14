import React, { useRef, useState } from 'react';
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa';
import styled from 'styled-components';

const PlayerControls = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    // Implement next track functionality
  };

  const handlePrevious = () => {
    // Implement previous track functionality
  };

  return (
    <Controls>
      <FaBackward onClick={handlePrevious} />
      {isPlaying ? (
        <FaPause onClick={handlePlayPause} />
      ) : (
        <FaPlay onClick={handlePlayPause} />
      )}
      <FaForward onClick={handleNext} />
      <audio ref={audioRef} src="path/to/your/audio/file.mp3" />
    </Controls>
  );
};

export default PlayerControls;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  svg {
    cursor: pointer;
    font-size: 2rem;
  }
`;
