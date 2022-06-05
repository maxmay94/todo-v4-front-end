import React, { useState, useEffect } from "react"
import Todo from "../../components/Todo/Todo"

import { getAllTodos, doTodo } from '../../services/todoService'

const Landing = ({ user }) => {

  let [todos, setTodos] = useState([{}])

  useEffect(() => {
    const getTodoData = async() => {
      let todoData = await getAllTodos()
      setTodos(todoData)
    }
    getTodoData()
  }, [])

  const handleDoTodo = async(todoId) => {
    try{
      await doTodo(todoId)
      let data = await getAllTodos()
      setTodos(data)
    } catch(err) {
      throw err
    }
  }

  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-5">What Are We Doing Today?</h1>

      {
        todos &&
        todos?.map((todo, i) => (
          <div key={i}>
            <Todo todo={todo} doTodo={handleDoTodo} />
          </div>
        ))
      }
    </div>
  )
}

export default Landing
