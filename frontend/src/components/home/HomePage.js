import React, { Component } from 'react';
import { connect } from 'react-redux';
import Thumbnail from './Thumbnail';
import PostForm from '../post/PostForm';
import * as postActions from '../../actions';


class HomePage extends Component {
  state = {
    post: Object.assign({}, this.props.initialPost)
  }

  updatePostState = (event) => {
    const field = event.target.name;
    let post = Object.assign({}, this.state.post);
    post[field] = event.target.value;
    return this.setState({post: post});
  }

  savePost = (event) => {
    event.preventDefault();
    this.props.savePost(this.state.post)
    .then(() => this.setState({post: {
      title:'',
      body:'',
      author:'',
      category:'',
    }}))
  }

  deletePost = (id) => this.props.deletePost(id);


  render () {
    const { posts } = this.props;

    return (
      <div className="row">
        <div className="col-md-9">
        {posts.map((post) => (
          <Thumbnail key={post.id} post={post} deletePost={this.deletePost} />
        ))}
        </div>
        <div className="col-md-3 jumbotron">
          <h4>Quick Post</h4>
          <PostForm
            post={this.state.post}
            options={this.props.categoryOptions}
            onChange={this.updatePostState}
            onSave={this.savePost}
          />
        </div>
      </div>
    )
  }
}

function getPostById(posts, id) {
  const post = posts.filter(post => post.id === id);
  if(post.length) return post[0];
  return null;
}


function mapStateToProps(state, ownProps) {
  let postId = ownProps.match.params.id;
  const { posts } = state;

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
    posts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    savePost: post => dispatch(postActions.savePost(post)),
    deletePost: id => dispatch(postActions.deletePost(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
