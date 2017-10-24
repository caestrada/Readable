import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CommentThumbnail from './CommentThumbnail';

class Thumbnail extends Component {
  state = {
    expandComments: false,
  }

  render() {
    const {post, deletePost, upVote, downVote} = this.props;

    return (
      <div className="thumbnail">
        <div className="caption">
          <Link to={`/${post.category}/${post.id}`}>{post.title}</Link>
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
          <a className="commentLink" onClick={() => (this.setState((curState) => {
            return {expandComments: !curState.expandComments}
          }))}>{post.comments ? post.comments.length : '0'} Comments</a>
        </div>

        {(this.state.expandComments) ?
          <div className="jumbotron commnets-jumbotron">
            <h4>Comments</h4>
            <Link className="btn btn-default comment-button" to={{ pathname: "/comment", query: { parentId: post.id } }}>Add Comment</Link>

            {post.comments.map(comment => (
              <CommentThumbnail key={comment.id} comment={comment} />
            ))}
          </div>
          :
          ''
        }
      </div>
    );
  }
}

export default Thumbnail;
