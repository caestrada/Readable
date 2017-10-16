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
export const CREATE_POST = 'CREATE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const SORT_BY_TIME = 'SORT_BY_TIME';
export const SORT_BY_VOTE = 'SORT_BY_VOTE';


export const sortByVote = (mostVotes) => {
  return {
    type: SORT_BY_VOTE,
    mostVotes,
  }
}

export const sortByTime = (accending) => {
  return {
    type: SORT_BY_TIME,
    accending,
  }
}

export const deletePostCreator = (post) => ({
  type: DELETE_POST,
  post,
})

export const deletePost = (id) => {
  return (dispatch) => {
    return api.deletePost(id)
            .then(post => dispatch(deletePostCreator(post)));
  }
}


export const loadPostsCreator = (posts) => ({
  type: LOAD_POSTS,
  posts,
})

export const loadPosts = () => {
  /* A thunk always returns a function that accepts a dispatch. */
  return (dispatch) => {
    return api.getAllPosts()
            .then(posts => dispatch(loadPostsCreator(posts)));
  }
}

export function createPost(post) {
  return { type: CREATE_POST, post };
}

export function updatePost(post) {
  return { type: UPDATE_POST, post };
}

export const savePost = (newPost) => {
  return (dispatch) => {
    return newPost.id ? api.updatePost(newPost).then(post => {
                          dispatch(updatePost(post));
                          return post;
                        }) : api.savePost(newPost)
                        .then(post => {
                          dispatch(createPost(post));
                          return post;
                        });
  }
}

