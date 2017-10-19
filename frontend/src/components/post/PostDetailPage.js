import React, { Component } from 'react';
import { connect } from 'react-redux';
import Thumbnail from '../common/Thumbnail';
import * as postActions from '../../actions';


class PostDetailPage extends Component {

  deletePost = (id) => {
    let confirmation = window.confirm("Are you sure you want to delete post?");
    if(confirmation) {
      this.props.deletePost(id).then(() => this.props.history.push('/'));
    }
  };

  upVote = (post) => {
    this.props.upVote(post)
  }

  downVote = (post) => {
    this.props.downVote(post)
  }

  render () {
    const {post} = this.props;

    return (
      <div>
        <h1>Post Detail</h1>
        <Thumbnail
          post={post}
          deletePost={this.deletePost}
          upVote={this.upVote}
          downVote={this.downVote}
        />
      </div>
    )
  }
}

function getPostById(posts, id) {
  const post = posts.filter(post => post.id === id);
  if(post.length) return post[0];
  return {};
}

function mapStateToProps(state, ownProps) {
  const {comments} = state;
  const postId = ownProps.match.params.post_id;

  let post = {
    title:'',
    body:'',
    author:'',
    category:'',
  };

  if(postId) {
    post = getPostById(state.posts, postId);
  }

  post.comments = comments.filter((comment) => post.id === comment.parentId);

  return {
    post,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deletePost: id => dispatch(postActions.deletePost(id)),
    upVote: post => dispatch(postActions.upVote(post)),
    downVote: post => dispatch(postActions.downVote(post)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailPage);
