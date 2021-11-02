import React, { Component } from 'react'
import ListItems from './ListItems'

export class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: '',
        isCompleted: true
      }
    }
  }
  handleForm = (e) => {
    e.preventDefault()
    const newItem = this.state.currentItem
    console.log(newItem)
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem]
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }
  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleForm}>
          <input
            type="text"
            value={this.state.currentItem.text}
            onChange={this.handleInput}
          />
          <button type="submit">Add</button>
        </form>
        {/* <ListItems items={this.state.items}/> */}
        {this.state.items.map(item => {
          return <div key={item.id}>{item.text}</div>
        })}
      </React.Fragment>
    )
  }
}

export default Form
