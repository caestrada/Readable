import React, { Component } from 'react';
import { connect } from 'react-redux';
import Thumbnail from './Thumbnail';

class HomePage extends Component {
  render () {
    const { posts } = this.props;

    return (
      <div className="row">
      {posts.map((post) => (
        <Thumbnail key={post.id} post={post} />
      ))}
      </div>
    )
  }
}


function mapStateToProps(state, ownProps) {
  const { posts } = state;
  return {
    posts,
  }
}

export default connect(mapStateToProps)(HomePage);
