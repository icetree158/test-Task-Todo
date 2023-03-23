import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../model/ITodo";

interface todosState {
    todos: ITodo[];
}
interface actionEditTodoByIndex {
    todoEdit: ITodo;
    todoPrev: ITodo;
}
const initialState: todosState = {
    todos: [{ name: "today", description: "go to #shop" },
    { name: "tomorrow", description: "Go to the #pool. buy #food" }],
}



export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addNewTodo(state, action: PayloadAction<ITodo>) {
            state.todos.push(action.payload)

        },
        removeTodoByIndex(state, action: PayloadAction<ITodo>) {
            const { name, description } = action.payload
            state.todos = state.todos.filter((e) => e.name !== name && e.description !== description)
        },
        editTodoByIndex(state, action: PayloadAction<actionEditTodoByIndex>) {
            const { todoEdit, todoPrev } = action.payload
            state.todos = state.todos.map(e => {
                if (e.name === todoPrev.name && e.description === todoPrev.description) {

                    return { ...todoEdit };
                }
                return e;
            });
        }
    }

})
export const { addNewTodo, removeTodoByIndex, editTodoByIndex } = todosSlice.actions
export default todosSlice.reducer