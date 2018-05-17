// React
import React, { Component } from 'react'

// Modules
import YTSearch from 'youtube-api-search'

// Components
import Header from '../Header'
import SearchBar from '../SearchBar'


const YOUTUBE_API_KEY = 'AIzaSyA872Hw7k3LHDXxN3Yb5wExY74PRUHulko'


export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      videos: []
    }

    // Youtube requests when component renders
    YTSearch({key: YOUTUBE_API_KEY, term: 'surboards'}, (data) => {
      this.setState({videos: data})
    })
  }

  render() {
    return (
      <div id="app">
        <Header />
        <main id="main">
          <SearchBar />
        </main>
      </div>
    )
  }

}
