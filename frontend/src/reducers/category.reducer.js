import { LOAD_CATEGORIES } from '../actions';

export default function category(state = [], action) {
  switch(action.type) {
    case LOAD_CATEGORIES:
      return action.categories;

    default:
      return state;
  }
}
