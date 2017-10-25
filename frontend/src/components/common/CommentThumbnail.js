import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as commentActions from '../../actions';

class CommentThumbnail extends Component {
  state = {
    comment: Object.assign({}, this.props.comment)
  }

  upVoteComment = (comment) => {
    this.props.upVoteComment(comment)
    .then(comment => {
      this.setState({comment});
    })
  }

  downVoteComment = (comment) => {
    this.props.downVoteComment(comment)
    .then(comment => {
      this.setState({comment});
    })
  }

  render() {
    const { deleteComment } = this.props;
    const { comment } = this.state;


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
              onClick={() => this.upVoteComment(comment)}
              className="glyphicon glyphicon-circle-arrow-up vote-icon"
              aria-hidden="true">
            </button>
            <button
              onClick={() => this.downVoteComment(comment)}
              className="glyphicon glyphicon-circle-arrow-down vote-icon"
              aria-hidden="true">
            </button>
          </span>
        </p>
      </div>
    );
  }
};


function mapDispatchToProps(dispatch) {
  return {
    upVoteComment: post => dispatch(commentActions.upVoteComment(post)),
    downVoteComment: post => dispatch(commentActions.downVoteComment(post)),
  }
}

export default connect(null, mapDispatchToProps)(CommentThumbnail);
