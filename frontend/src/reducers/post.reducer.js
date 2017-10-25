import {
  LOAD_POSTS,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  SORT_BY_TIME,
  SORT_BY_VOTE,
  UP_VOTE_POST,
  DOWN_VOTE_POST,
} from '../actions';

export default function post(state = [], action) {
  switch(action.type) {
    case LOAD_POSTS:
      return action.posts;

    case CREATE_POST:
      return [
        Object.assign({}, action.post), ...state
      ];

    case UPDATE_POST:
      return [
        ...state.filter(post => post.id !== action.post.id),
        Object.assign({}, action.post)
      ];

    case DELETE_POST:
      return [
        ...state.filter(post => post.id !== action.post.id)
      ]

    case SORT_BY_TIME:
      return action.accending ?
              state.slice().sort((a,b) => {return a.timestamp - b.timestamp}) :
              state.slice().sort((a,b) => {return b.timestamp - a.timestamp});

    case SORT_BY_VOTE:
      return action.mostVotes ?
              state.slice().sort((a,b) => {return a.voteScore - b.voteScore}) :
              state.slice().sort((a,b) => {return b.voteScore - a.voteScore});

    case UP_VOTE_POST:
      action.post.voteScore++;

      return [
        ...state.filter(post => post.id !== action.post.id),
        Object.assign({}, action.post)
      ];

    case DOWN_VOTE_POST:
      action.post.voteScore--;

      return [
        ...state.filter(post => post.id !== action.post.id),
        Object.assign({}, action.post)
      ];

    default:
      return state;
  }
}
