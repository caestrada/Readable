import { LOAD_CATEGORIES } from '../actions';

const initialState = [
        {
            "name": "react",
            "path": "react"
        },
        {
            "name": "redux",
            "path": "redux"
        },
        {
            "name": "udacity",
            "path": "udacity"
        }
    ];

export default function category(state = initialState, action) {
  switch(action.type) {
    case LOAD_CATEGORIES:
      return action.categories;

    default:
      return state;
  }
}
