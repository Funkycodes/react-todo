// @ts-check

export default function FormReducer(state = {}, action = {}) {
  switch (action.type) {
    case "text":
      return {
        ...state,
        text: action.text,
      };
    case "tag":
      return {
        ...state,
        tag: action.tag,
      };
    case "focused":
      return {
        ...state,
        focused: action.focused,
      };
    case "important":
      return {
        ...state,
        important: action.important,
      };
    default:
      return { ...state };
  }
}
