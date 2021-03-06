import {
  LOAD_COMMENTS,
  CREATE_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  UP_VOTE_COMMENT,
  DOWN_VOTE_COMMENT,
} from '../actions';

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

    case DELETE_COMMENT:
      return [
        ...state.filter(comment => comment.id !== action.comment.id)
      ]

    case UP_VOTE_COMMENT:
      action.comment.voteScore++;

      return [
        ...state.filter(comment => comment.id !== action.comment.id),
        Object.assign({}, action.comment)
      ];

    case DOWN_VOTE_COMMENT:
      action.comment.voteScore--;

      return [
        ...state.filter(comment => comment.id !== action.comment.id),
        Object.assign({}, action.comment)
      ];

    default:
      return state;
  }
}
