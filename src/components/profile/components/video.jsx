import React from 'react';

const VideoPlayer = () => {
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    sources: [
      {
        src: 'https://stream.mux.com/y2c5LsNSpwqz1dMQek4KwzYyljV01Fw9VO8zeVe012Nfo.m3u8',
        type: 'video/m3u8',
      },
    ],
  };

  return (
    <div className="VideoPlayer">
      <VideoPlayer {...videoJsOptions} />
    </div>
  );
}

export default VideoPlayer;
