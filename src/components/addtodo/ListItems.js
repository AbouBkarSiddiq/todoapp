import React, { Component } from 'react'

export class ListItems extends Component {
  render() {
    return (
      <div>
        {this.state.items.length}
        <h1>hello from list items</h1>
      </div>
    )
  }
}

export default ListItems