<div>
          {this.state.todos.map((item) => {
            // console.log('Todos array', this.state.todos)
            return <div key={item.id}>
              <input type="checkbox" defaultChecked={this.state.task.isCompleted} onChange={() => this.handleDone(item.id)} />
              {item.text}
              <button onClick={() => this.editTodo(item.id)}>Edit</button>
              <button onClick={() => this.deleteItem(item.id)}>Delete</button>
            </div>
          })}
        </div>