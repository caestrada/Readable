import React from 'react';
import { Link } from 'react-router-dom';

const CommentThumbnail = ({ comment, deleteComment }) => {
  return (
    <div key={comment.id} className="jumbotron">
      <p>{comment.body}</p>
      <p><Link to={`/comment/edit/${comment.id}`} className="btn btn-primary btn-xs">Edit</Link> <button onClick={() => deleteComment(comment.id)} className="btn btn-default btn-xs">Delete</button></p>
      <p>Author: {comment.author}</p>
      <p>Last Updated: {Date(comment.timestamp)}</p>
      <p>
        Votes: {comment.voteScore}
        <span id="vote-icons">
          <button
            onClick={() => null}
            className="glyphicon glyphicon-circle-arrow-up vote-icon"
            aria-hidden="true">
          </button>
          <button
            onClick={() => null}
            className="glyphicon glyphicon-circle-arrow-down vote-icon"
            aria-hidden="true">
          </button>
        </span>
      </p>
    </div>
  );
};

export default CommentThumbnail;
