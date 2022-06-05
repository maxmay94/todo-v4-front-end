import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/todos`

export const getAllTodos = async() => {
  try {
    const res = await fetch(BASE_URL)
    const data = await res.json()
    return data
  } catch(err) {
    throw err
  }
}

export const createTodo = async() => {
  try {

  } catch(err) {
    throw err
  }
}

export const deleteTodos = async(todoId) => {
  try {

  } catch(err) {
    throw err
  }
}

export const updateTodo = async(todoId, title) => {
  try {

  } catch(err) {
    throw err
  }
}

export const doTodo = async(todoId) => {
  try {
    await fetch(`${BASE_URL}/${todoId}/done`, {
      method: 'PATCH'
    })
  } catch(err) {
    throw err
  }
}
