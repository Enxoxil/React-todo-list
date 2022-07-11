
const CHANGE_INPUT = "CHANGE_INPUT";
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const DONE_TODO = "DONE_TODO";
const CHANGE_TODO_LIST = 'CHANGE_TODO_LIST';
const initialState = {
    todoList: [],
    doneTodoList: [],
    input: "",
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INPUT:
            return { ...state, input: action.payload };
        case ADD_TODO:
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    { text: action.payload, id: action.id, isDone: false },
                ],
                input: "",
            };
        case REMOVE_TODO:
            return {
                ...state,
                todoList: state.todoList.filter(
                    (item) => item.id !== action.id
                ),
            };
        case DONE_TODO:
            return {
                ...state,
                todoList: state.todoList.map((item) => 
                  item.id === action.id ? {...item, isDone: !item.isDone } : {...item} 
                ),
            };
        case CHANGE_TODO_LIST:
            return {
                ...state,
                doneTodoList: state.todoList.filter((item) => item.id === action.id)
            }
        default:
            return state;
    }
};

export const AddTodo = (payload, id) => ({ type: ADD_TODO, payload, id });
export const ChangeInputValue = (payload) => ({ type: CHANGE_INPUT, payload });
export const RemoveTodo = (id) => ({ type: REMOVE_TODO, id });
export const DoneTodoItem = (id) => ({ type: DONE_TODO, id });
export const ChangeTodoList = (id) => ({type: CHANGE_TODO_LIST, id});
export const ChangeDoneTodoList = (id) => (dispatch) => {
    dispatch(DoneTodoItem(id));
    dispatch(ChangeTodoList(id));
    dispatch(RemoveTodo(id));
}




