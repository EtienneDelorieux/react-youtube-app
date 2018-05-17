// React
import React from 'react'

// Components
import VideoListItem from '../VideoListItem'


const VideoList = (props) => {

  const videoItems = props.videos.map((video) => {
    return <VideoListItem video={video} />
  })

  return (
    <ul>
      {videoItems}
    </ul>
  )

}


export default VideoList
