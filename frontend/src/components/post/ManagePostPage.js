import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import * as postActions from '../../actions';


class ManagePostPage extends Component {

  state = {
    post: Object.assign({}, this.props.initialPost)
  }

  updatePostState(event) {
    const field = event.target.name;
    let post = Object.assign({}, this.state.post);
    post[field] = event.target.value;
    return this.setState({post: post});
  }

  savePost(event) {
    event.preventDefault();
    this.props.savePost(this.state.post)
    .then(post => {
      this.props.history.push('/');
    })
  }

  render() {
    return (
      <div>
        <PostForm
          post={this.state.post}
          options={this.props.categoryOptions}
          onChange={this.updatePostState.bind(this)}
          onSave={this.savePost.bind(this)}
        />
      </div>
    );
  }
}

function getPostById(posts, id) {
  const post = posts.filter(post => post.id === id);
  if(post.length) return post[0];
  return null;
}


function mapStateToProps(state, ownProps) {
  let postId = ownProps.match.params.id;

  let post = {
    title:'',
    body:'',
    author:'',
    category:'',
  };

  if(postId) {
    post = getPostById(state.posts, postId);
  }

  const categoryOptions = state.categories.map(category => {
    return category.name;
  })

  return {
    initialPost: post,
    categoryOptions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    savePost: post => dispatch(postActions.savePost(post)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePostPage);
