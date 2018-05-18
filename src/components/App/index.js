// React
import React, { Component } from 'react'

// Modules
import YTSearch from 'youtube-api-search'
import _ from 'lodash'

// Components
import Header from '../Header'
import SearchBar from '../SearchBar'
import VideoList from '../VideoList'
import VideoDetails from '../VideoDetails'


const YOUTUBE_API_KEY = 'AIzaSyA872Hw7k3LHDXxN3Yb5wExY74PRUHulko'


export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch("everest");
  }

  videoSearch(term) {
    YTSearch({key: YOUTUBE_API_KEY, term: term}, (results) => {
      this.setState({
        videos: results,
        selectedVideo: results[0]
      })
    })
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)

    return (
      <div id="app">
        <Header />
        <main>
          <div className="container">
            <section id="searchBar">
              <SearchBar onSearchTermChange={videoSearch} />
            </section>
            <section id="results" className="row">
              <div id="videoDetails" className="col-lg-8">
                <VideoDetails video={this.state.selectedVideo} />
              </div>
              <div id="videoList" class="col-lg-4">
                <VideoList
                  onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                  videos={this.state.videos}
                />
              </div>
            </section>
          </div>
        </main>
      </div>
    )
  }

}
