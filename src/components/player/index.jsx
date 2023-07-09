import ReactPlayer from 'react-player';
import React, { useRef } from 'react';
import './style.css';
import { introdata } from '../../content_option';
const VIDEO_PATH = introdata.theme_video_url;
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