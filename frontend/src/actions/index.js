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

// ::::: COMMENTS
export const LOAD_COMMENTS   = 'LOAD_COMMENTS';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';

export const loadComments = (comments) => ({
  type: LOAD_COMMENTS,
  comments,
})

export function createComment(comment) {
  return { type: CREATE_COMMENT, comment };
}

export function updateComment(comment) {
  return { type: UPDATE_COMMENT, comment };
}

export const saveComment = (newComment) => {
  console.log('saveComment', newComment);
  return (dispatch) => {
    // return  api.saveComment(newComment)
    //         .then(comment => {
    //           dispatch(createComment(comment));
    //           return comment;
    //         });
    return newComment.id
            ? api.updateComment(newComment).then(comment => {
                dispatch(updateComment(comment));
                return comment;
              })
            : api.saveComment(newComment)
              .then(comment => {
                dispatch(createComment(comment));
                return comment;
              });
  }
}


// ::::: POSTS
export const LOAD_POSTS   = 'LOAD_POSTS';
export const CREATE_POST  = 'CREATE_POST';
export const UPDATE_POST  = 'UPDATE_POST';
export const DELETE_POST  = 'DELETE_POST';
export const SORT_BY_TIME = 'SORT_BY_TIME';
export const SORT_BY_VOTE = 'SORT_BY_VOTE';
export const UP_VOTE      = 'UP_VOTE';
export const DOWN_VOTE    = 'DOWN_VOTE';

export const upVote = (post) => {
  return (dispatch) => {
    return api.upVote(post)
            .then(post => {
              dispatch(updatePost(post));
              return post;
            });
  }
}

export const downVote = (post) => {
  return (dispatch) => {
    return api.downVote(post)
            .then(post => {
              dispatch(updatePost(post));
              return post;
            });
  }
}

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

/*
  1. Fetch all posts.
  2. Fetch all comments from post ids.
  3. Append comments to each of their posts.
  4. Dispatch Posts with their respective comments.
*/
export const loadPosts = () => {
  /* A thunk always returns a function that accepts a dispatch. */
  return (dispatch) => {

    // 1. Fetch all posts::::
    return api.getAllPosts()
    //:::::::::::::::::::::::
              .then(posts => {
                return new Promise(resolve => {

                  // 2. Fetch all comments from post ids::::
                  /* Create an array of Promises for comments */
                  let postsPromise = [];
                  posts.forEach(post => {
                    postsPromise.push(api.getPostComments(post.id));
                  })

                  Promise.all(postsPromise)
                  .then(commentsArrays => {
                    /*  flattent arrays of comments.
                        e.g., [[c1, c2], [c3], [c4, c5]] => [c1, c2, c3, c4, c5] */
                    return [].concat(...commentsArrays);
                  })
                  //::::::::::::::::::::::::::::::::::::::::

                  .then(allComments => {
                    dispatch(loadComments(allComments))

                    // 3. Append comments to each of their posts::::
                    posts.map(post => {
                      post.comments = [];
                      allComments.forEach(comment => {
                        if(comment.parentId === post.id) {
                          post.comments.push(comment);
                        }
                      })
                      return post;
                    })
                    resolve(posts);
                    //::::::::::::::::::::::::::::::::::::::::::::::
                  })
                })
              })
              .then(posts => {
                // 4. Dispatch Posts with their respective comments.::::::
                dispatch(loadPostsCreator(posts));
                //::::::::::::::::::::::::::::::::::::::::::::::::::::::::
              });
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

