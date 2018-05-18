// React
import React from 'react'


const VideoDetails = ({video}) => {

  if (!video) {
    return (
      <div>
        <p>Loading</p>
      </div>
    )
  }

  const videoId = video.id.videoId
  const videoUrl = `https://www.youtube.com/embed/${videoId}`

  return (
    <div className="videoDetails__wrapper">
      <div className="videoDetails__media embed-responsive embed-responsive-16by9">
        <iframe src={videoUrl} className="embed-responsive-item"></iframe>
      </div>
      <div className="videoDetails__body">
        <h1>{video.snippet.title}</h1>
        <p className="videoDetails__desc">{video.snippet.description}</p>
      </div>
    </div>
  )
}


export default VideoDetails
