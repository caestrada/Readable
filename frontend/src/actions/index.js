import * as api from '../util/api';

// ::::: CATEGORIES
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

// ::::: POSTS
export const LOAD_POSTS = 'LOAD_POSTS';

export const loadPostsCreator = (posts) => ({
  type: LOAD_POSTS,
  posts
})

export const loadPosts = () => {
  /* A thunk always returns a function that accepts a dispatch. */
  return (dispatch) => {
    return api.getAllPosts()
            .then(posts => dispatch(loadPostsCreator(posts)));
  }
}
