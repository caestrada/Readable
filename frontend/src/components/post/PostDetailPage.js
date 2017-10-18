import React, { Component } from 'react';
import { connect } from 'react-redux';
import Thumbnail from '../common/Thumbnail';
import * as postActions from '../../actions';


class PostDetailPage extends Component {
  state = {
    post: Object.assign({}, this.props.post),
  }

  deletePost = (id) => {
    let confirmation = window.confirm("Are you sure you want to delete post?");
    if(confirmation) {
      this.props.deletePost(id).then(() => this.props.history.push('/'));
    }
  };

  render () {
    const {post} = this.state;

    return (
      <div>
        <h1>Post Detail</h1>
        <Thumbnail post={post} deletePost={this.deletePost} />
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
  const postId = ownProps.match.params.id;

  let post = {
    title:'',
    body:'',
    author:'',
    category:'',
  };

  if(postId) {
    post = getPostById(state.posts, postId);
  }

  return {
    post,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deletePost: id => dispatch(postActions.deletePost(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailPage);
