const initialState = {
    todos: ['']
}

const CREATE_TODO = 'CREATE_TODO';

export function createTodo(newTodo){
    return {
        type: CREATE_TODO,
        payload: newTodo
    }
}

export default function todoReducer(state = initialState, action) {
    switch(action.type){
        case CREATE_TODO:
        return Object.assign({}, state, {todos: [...state.todos, action.payload]})
        default:
        return state;
    }
}