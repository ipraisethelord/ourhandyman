import ReactPlayer from 'react-player';
import React, { useRef } from 'react';
import './style.css';
const VIDEO_PATH = 'bathroom.mp4';
function PlayerComponent() {
   const playerRef = useRef(null);
   return (
      <div className='player-wrapper'>
         <ReactPlayer className='react-player' ref={playerRef} url={VIDEO_PATH} controls={true}
         width="80%"
        />
      </div>
   )
};
export default PlayerComponent;