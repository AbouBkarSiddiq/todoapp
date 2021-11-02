import React, { Component } from 'react'

export class List extends Component {
  
  render() {
    const { todos, deleteItem } = this.props
    return (
      <div>
        {todos.map((item, key) => {
          return<li key={item.id}>
            {item}
            <button onClick={() => this.deleteItem(item.id)}>Delete</button>
            </li>
        })}
      </div>
    )
  }
}

export default List
