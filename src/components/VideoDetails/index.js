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
    <div className="row">
      <div className="videoDetails col-lg-8">
        <div className="videoDetails__media">
          <iframe src={videoUrl}></iframe>
        </div>
        <div className="videoDetails__body">
          <h1>{video.snippet.title}</h1>
          <p className="videoDetails__desc">{video.snippet.description}</p>
        </div>
      </div>
      <aside className="similarVideos col-lg-4">
        <p>Coucou coucou coucou coucou coucou coucou coucou coucou coucou coucou coucou coucou coucou coucou coucou coucou coucou coucou coucou coucou coucou</p>
      </aside>
    </div>
  )
}


export default VideoDetails
