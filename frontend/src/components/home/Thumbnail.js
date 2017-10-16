import React from 'react'
import { Link } from 'react-router-dom';

const Thumbnail = ({post}) => {

  return (
    <div className="thumbnail">
      <div className="caption">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <p><Link to={`/post/edit/${post.id}`} className="btn btn-primary">Edit</Link> <a href="#" className="btn btn-default" role="button">Delete</a></p>
      </div>
    </div>
  )
}

export default Thumbnail
