// React
import React from 'react'

// Components
import VideoListItem from '../VideoListItem'


const VideoList = (props) => {

  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        video={video}
        key={video.etag}
      />
    )
  })

  return (
    <ul>
      {videoItems}
    </ul>
  )

}


export default VideoList
