import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentForm from './CommentForm';
import * as commentActions from '../../actions';

class ManageCommentPage extends Component {
  state = {
    comment: Object.assign({}, this.props.initialComment)
  }

  updateCommentState(event) {
    const field = event.target.name;
    let comment = Object.assign({}, this.state.comment);
    comment[field] = event.target.value;
    return this.setState({comment: comment});
  }

  saveComment(event) {
    event.preventDefault();
    this.props.saveComment(this.state.comment)
    .then(comment => {
      this.props.history.push('/');
    })
  }

  render() {
    return (
      <div>
        <CommentForm
          comment={this.state.comment}
          onChange={this.updateCommentState.bind(this)}
          onSave={this.saveComment.bind(this)}
        />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  let parentId = (ownProps.location.query ? ownProps.location.query.parentId : '');
  let comment = {
    body:'',
    author:'',
    parentId: parentId,
  };

  return {
    initialComment: comment,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveComment: comment => dispatch(commentActions.saveComment(comment)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCommentPage);

