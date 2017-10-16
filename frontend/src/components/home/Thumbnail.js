import React from 'react'
import { Link } from 'react-router-dom';

const Thumbnail = ({post, deletePost}) => {

  return (
    <div className="thumbnail">
      <div className="caption">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <p>
          <Link to={`/post/edit/${post.id}`} className="btn btn-primary">Edit</Link>
          <button onClick={() => deletePost(post.id)} className="btn btn-default">Delete</button>
        </p>
      </div>
    </div>
  )
}

export default Thumbnail
