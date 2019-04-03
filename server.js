const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
  const server = express()
  let todos = [
    {
      id: 101,
      title: "start",
      description: "Start up Todo App",
      done: false
    },
    {
      id: 103,
      title: "Explore",
      description: "Explore the App",
      done: false
    }
]

   /* server.delete("/api/v1/todos/:id", (res, req) => {
        const reqid = req.params.id;
        let todo = todos.filter(todo => {
            return todo.id == reqid;
        })[0];

        const index = todos.indexOf(todo);
        todos.splice(index, 1);
        res.json({ message: `todo ${reqid} deleted`})
   }) */

   server.get("/api/v1/todos", (req, res) => {
        res.status(200).send({
            success:'true',
            message: 'todos retrieved successfully',
            todos: todos
        })
       });
     

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3001, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3001')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })