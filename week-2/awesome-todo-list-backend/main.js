const http = require("http")
const PORT = process.env.port || 5000;
const Todo = require("./controller")
const { getRequestData } = require("./utils")

const server = http.createServer(async (req, res) => {
  //GET --> /api/todos
  if (req.url === "/api/todos" && req.method === "GET") {
    const todos = await new Todo().getTodos();
    res.writeHead(200, { "content-type": "application/json" })
    res.end(JSON.stringify(todos))
  }
  //GET --> /api/todos/:id
  else if (req.url.match(/^\/api\/todos\/[0-9]+$/) && req.method === "GET") {
    try {
      const id = req.url.split("/")[3]
      const singleTodo = await new Todo().getSingleTodo(id);
      res.writeHead(200, { "content-type": "application/json" })
      res.end(JSON.stringify(singleTodo))
    } catch (error) {
      res.writeHead(404, { "content-type": "application/json" })
      res.end(JSON.stringify({ message: error }))
    }
  }
  else {
    res.writeHead(404, { "content-type": "application/json" })
    res.end(JSON.stringify({ message: "Route not found" }))
  }
})

server.listen(PORT, () => console.log(`server started on PORT: ${PORT}`))
