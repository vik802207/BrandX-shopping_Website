import React from 'react'
import ReactPlayer from 'react-player'

function VideoPlayerR() {
  return (
   <>
   
    <ReactPlayer
    url="https://www.youtube.com/watch?v=7PIji8OubXU"
    width='100%'
    height='80vh'
    control={false}
    loop={true}
    muted={true}
    pip={true}
    
   
    />
   </>
  )
}

export default VideoPlayerR