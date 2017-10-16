const api = 'http://localhost:3001';

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getAllCategories = () => {
  return fetch(`${api}/categories`, {
            headers,
          })
          .then(res => {
            return res.json();
          })
          .then(data => {
            return data.categories;
          });
}

export const getAllPosts = () => {
  return fetch(`${api}/posts`, {headers})
          .then(res => res.json());
}

export const updatePost = (post) => {
  return fetch(`${api}/posts/${post.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: post.title,
      body: post.body,
    }),
  })
  .then(res => res.json());
}

export const savePost = (post) => {
  return fetch(`${api}/posts`, {
            method: 'POST',
            headers: {
              ...headers,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: Math.floor((Math.random() * 100) + 1).toString(),
              timestamp: Date.now(),
              title: post.title,
              body: post.body,
              author: post.author,
              category: post.category,
            }),
          })
          .then(res => res.json());
}

export const deletePost = (id) => {
  return fetch(`${api}/posts/${id}`, {
              method: 'DELETE',
              headers: {
                ...headers,
                'Content-Type': 'application/json'
              },
            })
            .then(res => res.json());
}