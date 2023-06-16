import type {Actions} from "@sveltejs/kit";
import {fail} from "@sveltejs/kit";

const todoList = [1,2,3]

export function load() {
  return {todos: todoList}
}

export const actions: Actions = {
  deleteTodo: async ({request}) => {
    const formData = await request.formData()
    const id = Number(formData.get('todo'))

    if (!id) {
      return fail(400, {missing: true, message: "Todo required"})
    }
    await sleep(2000)

    console.log(todoList.indexOf(id))
    return {success: true}
  },

  addTodo: async ({request}) => {
    const formData = await request.formData()
    const id = Number(formData.get('todo'))
    await sleep(2000)
    todoList.push(id)
    return {success: true}
  }
}

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

