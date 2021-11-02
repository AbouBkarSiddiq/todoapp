import React, { Component } from 'react'
import List from '../list/List';

export class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      task: {
        text: '',
        isCompleted: false,
        key: ''
      }
    }
  }

  onChangeHandler = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: new Date().getTime().toString(),
        isCompleted: false
      }
    });
  };

  editTodo = (id) => {
    let obj = this.state.todos.find(item => {
      return item.id === id
    })

    this.setState({
      task: obj
    });
    console.log('New todo obj:', obj)
  }

  handleDone = (todo) => {
    const todos = [...this.state.todos]
    todos.forEach((t) => {
      if (t.id === todo.id) {
        t.isCompleted = !t.isCompleted;
        console.log('Completed', t.isCompleted)
      }
      return t;
    });
    this.setState({ todos });
  }

  deleteItem = (id) => {
    const filteredTodos = this.state.todos.filter(item => item.id !== id)
    this.setState({
      todos: filteredTodos
    })
  }

  handleSubmit = (e) => {
    const newtask = this.state.task
    e.preventDefault();
    if (newtask.text !== "" && newtask.key !== "" && newtask.key !== "") {
      const newtasks = [...this.state.todos, newtask]
      this.setState({
        todos: newtasks,
        task: {
          text: '',
          id: '',
          isCompleted: false,
        }
      })
      // e.target.reset()
    } else {
    }
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            value={this.state.task.text}
            onChange={this.onChangeHandler}
          />
          <button type="submit">Add</button>
          {/* <List todos={this.state.todos} deleteItem={this.deleteItem()} /> */}
        </form>
        <div>
          {this.state.todos.map((item) => {
            console.log('Todos array', this.state.todos)
            return <div key={item.id}>
              <input type="checkbox" defaultChecked={this.state.task.isCompleted} onChange={() => this.handleDone(item.id)} />
              {item.text}
              {/* {item.id} */}
              <button onClick={() => this.editTodo(item.id)}>Edit</button>
              <button onClick={() => this.deleteItem(item.id)}>Delete</button>
            </div>
          })}
        </div>
      </>
    )
  }
}

export default TodoForm
