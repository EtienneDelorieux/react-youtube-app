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

  onInputChange(term) {
    this.setState({searchTerm: term})
    this.props.onSearchTermChange(term)
  }

  render() {
    return (
      <form>
        <input
          type="text"
          onChange={event => this.onInputChange(event.target.value)}
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
