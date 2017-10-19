import { LOAD_COMMENTS } from '../actions';

export default function post(state = [], action) {
  switch(action.type) {
    case LOAD_COMMENTS:
      return action.comments;

    default:
      return state;
  }
}
