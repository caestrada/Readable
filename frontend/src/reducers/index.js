import { combineReducers } from 'redux';
import categories from './category.reducer';

const rootReducer = combineReducers({
  categories,
});

export default rootReducer;
