import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
            <button
              onClick={() => console.log('add comment')}
              className="btn btn-default comment-button"
              aria-hidden="true">Add Comment</button>

            {post.comments.map(comment => (
              <div key={comment.id} className="jumbotron">
                <p>{comment.body}</p>
                <p><Link to={`/comment/edit/${comment.id}`} className="btn btn-primary btn-xs">Edit</Link> <button onClick={() => deletePost(comment.id)} className="btn btn-default btn-xs">Delete</button></p>
                <p>Author: {comment.author}</p>
                <p>Last Updated: {Date(comment.timestamp)}</p>
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
              </div>
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
