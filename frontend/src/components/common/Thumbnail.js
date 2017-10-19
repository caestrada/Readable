import React from 'react'
import { Link } from 'react-router-dom';

const Thumbnail = ({post, deletePost, upVote, downVote}) => {

  return (
    <div className="thumbnail">
      <div className="caption">
        <Link to={`/post/${post.id}`}>{post.title}</Link>
        <p><Link to={`/post/edit/${post.id}`} className="btn btn-primary btn-xs">Edit</Link> <button onClick={() => deletePost(post.id)} className="btn btn-default btn-xs">Delete</button></p>
        <p>Category: {post.category}</p>
        <p>Author: {post.author}</p>
        <p>Last Updated: {Date(post.timestamp)}</p>
        <p>
          Votes: {post.voteScore}
          <span id="vote-icons">
            <button
              onClick={() => upVote(post)}
              className="glyphicon glyphicon-circle-arrow-up vote-icon"
              aria-hidden="true">
            </button>
            <button
              onClick={() => downVote(post)}
              className="glyphicon glyphicon-circle-arrow-down vote-icon"
              aria-hidden="true">
            </button>
          </span>
        </p>
        <p>{post.comments ? post.comments.length : '0'} Comments</p>
      </div>
    </div>
  )
}

export default Thumbnail
