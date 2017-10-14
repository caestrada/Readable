import { combineReducers } from 'redux';
import categories from './category.reducer';
import posts from './post.reducer';

const rootReducer = combineReducers({
  categories,
  posts
});

export default rootReducer;
