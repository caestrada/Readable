import { LOAD_POSTS, CREATE_POST, UPDATE_POST } from '../actions';

export default function post(state = [], action) {
  switch(action.type) {

    case LOAD_POSTS:
      return action.posts;

    case CREATE_POST:
      return [
        ...state,
        Object.assign({}, action.post)
      ];

    case UPDATE_POST:
      return [
        ...state.filter(post => post.id !== action.post.id),
        Object.assign({}, action.post)
      ];


    default:
      return state;
  }
}
