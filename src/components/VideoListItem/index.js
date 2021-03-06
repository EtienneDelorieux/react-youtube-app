// React
import React from 'react'


const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url

  return (
    <li className="results__item" onClick={() => onVideoSelect(video)}>
      <div className="results__media">
        <img src={imageUrl} alt="" className="results__img"/>
      </div>
      <h3>{video.snippet.title}</h3>
    </li>
  )
}


export default VideoListItem
