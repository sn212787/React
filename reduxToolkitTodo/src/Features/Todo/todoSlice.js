import { createSlice, nanoid } from '@reduxjs/toolkit';

const intialState = {
    todos: [{id: 1, text: 'Hello world'}]

}

export const todoSlice = createSlice({
    name: 'todo',
    intialState,
    reducers:  {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        //in state we get current state of that objct
        // in action the data will pass we get
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo
            .id !== action.payload) 

        }, 
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo
            .id ? todo : action.payload)
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer