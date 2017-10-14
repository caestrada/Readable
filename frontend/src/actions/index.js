import * as api from '../util/api';

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';

export const loadCategoriesCreator = (categories) => ({
  type: LOAD_CATEGORIES,
  categories,
});

export const loadCategories = () => {
  /* A thunk always returns a function that accepts a dispatch. */
  return (dispatch) => {
    return api.getAllCategories()
            .then(categories => dispatch(loadCategoriesCreator(categories)))
            .catch(err => {throw(err)});
  }
}
