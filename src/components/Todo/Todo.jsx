import React from "react";

const Todo = ({todo, doTodo}) => {

  let background = todo.completed ? 
  'bg-blue-500 hover:bg-blue-600 text-center w-2/3 mx-auto my-5 p-5 rounded drop-shadow-2xl mb-3'
  : 'bg-purple-500 hover:bg-purple-600 text-center w-2/3 mx-auto my-5 p-5 rounded drop-shadow-2xl mb-3'

  let decoration = todo.completed ?  'line-through' : ''

  return (
    <div className={background}>
      <button 
        className="w-full"
        onClick={doTodo(todo._id)}
      >
        <h1 className={decoration}>{todo.title}</h1>  
      </button>
      <div className="flex">
        <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 mx-5 rounded">
          edit
        </button>

        <button className="flex-1 bg-red-500 hover:bg-red-600 mx-5 rounded">
          delete
        </button>
      </div>
    </div>
  )
}

export default Todo