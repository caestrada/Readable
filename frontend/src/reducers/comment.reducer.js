import { LOAD_COMMENTS, CREATE_COMMENT, UPDATE_COMMENT } from '../actions';

export default function post(state = [], action) {
  switch(action.type) {
    case LOAD_COMMENTS:
      return action.comments;

    case CREATE_COMMENT:
      return [
        Object.assign({}, action.comment), ...state
      ];

    case UPDATE_COMMENT:
      return [
        ...state.filter(comment => comment.id !== action.comment.id),
        Object.assign({}, action.comment)
      ];

    default:
      return state;
  }
}
