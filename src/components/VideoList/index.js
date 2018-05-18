// React
import React from 'react'

// Components
import VideoListItem from '../VideoListItem'


const VideoList = (props) => {

  const videoItems = props.videos.map((video) => {
    return <VideoListItem video={video} key={video.etag} />
  })

  return (
    <section id="results">
      <ul>
        {videoItems}
      </ul>
    </section>
  )

}


export default VideoList
