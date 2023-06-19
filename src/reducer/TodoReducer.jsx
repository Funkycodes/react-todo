// @ts-check

export default function TodoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todo: [action.newTodo, ...state.todo],
      };
    case "DELETE_TODO":
      return {
        todo: state.todo.filter((todoItem) => todoItem.id !== action.id),
      };
    default:
      return { ...state };
  }
}
