const data = require("./data")

class Controller {
  // get all todo items
  async getTodos() {
    return new Promise((resolve, _) => resolve(data))
  }

  // Get a single Todo item
  async getSingleTodo(id) {
    return new Promise((resolve, reject) => {
      const foundTodo = data.find((item) => item.id === parseInt(id))
      if (foundTodo) {
        resolve(foundTodo)
      } else {
        reject(`todo with id:${id} not found`)
      }
    })
  }

  // Create a todo item
  async createTodo(todo) {
    return new Promise((resolve, _) => {
      const newTodo = { id: Math.floor(4 + Math.random() * 10), ...todo }
      resolve(newTodo)
    })
  }

  // mark todo as completed
  async makeTodoCompleted(id) {
    return new Promise((resolve, reject) => {
      const foundTodo = data.find((item) => item.id === parseInt(id))
      if (foundTodo) {
        foundTodo.completed = true;
        resolve(foundTodo)
      } else {
        reject(`todo with id:${id} not found`)
      }
    })
  }

  // delete todo item
  async deleteTodoItem(id) {
    return new Promise((resolve, reject) => {
      const foundTodo = data.find((item) => item.id === parseInt(id))
      if (foundTodo) {
        resolve("Item deleted")
      } else {
        reject(`todo with id:${id} not found`)
      }
    })
  }
}

module.exports = Controller
