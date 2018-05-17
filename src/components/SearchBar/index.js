// React
import React, { Component } from 'react'

// Components
import Button from '../Button'


export default class SearchBar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      searchTerm: '',
    }
  }

  render() {
    return (
      <form>
        <input
          type="text"
          onChange={event => this.setState({searchTerm: event.target.value})}
          value={this.state.searchTerm}
        />
        <Button
          type="submit"
          btnClass="btn btn--primary"
          text="Gimme Tubes"
        />
      </form>
    )
  }

}
