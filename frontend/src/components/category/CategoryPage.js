import React, { Component } from 'react';
import { connect } from 'react-redux';
import Thumbnail from '../common/Thumbnail';


class CategoryPage extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div className="row">
        <div className="col-md-12">
        {posts.map((post) => (
          <Thumbnail
            key={post.id}
            post={post}
            deletePost={this.deletePost}
            upVote={this.props.upVote}
            downVote={this.props.downVote}
          />
        ))}
        </div>
      </div>
    );
  }
}

function getRealatePosts(posts, type) {
  const relatedPosts = posts.filter(post => post.category === type);
  return relatedPosts;
}

function mapStateToProps(state, ownProps) {
  console.log('state', state);
  console.log('ownProps', ownProps);
  let catType = ownProps.location.search.substring(1);
  console.log('location', catType);
  let posts = getRealatePosts(state.posts, catType);
  console.log('relatedPosts', posts);

  posts.map((post) => {
    post.comments = state.comments.filter((comment) => post.id === comment.parentId);
  });

  return {
    posts,
  };
}


export default connect(mapStateToProps)(CategoryPage);
