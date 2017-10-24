import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './common/Header';
import HomePage from './home/HomePage';
import ManagePostPage from './post/ManagePostPage';
import PostDetailPage from './post/PostDetailPage';
import CategoryPage from './category/CategoryPage';
import ManageCommentPage from './comment/ManageCommentPage';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="content" className="container">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/post/edit/:id" component={ManagePostPage} />
          <Route exact path="/post" component={ManagePostPage} />

          <Route exact path="/:category/:post_id" component={PostDetailPage} />
          <Route exact path="/:category" component={CategoryPage} />
          <Route exact path="/comment/edit/:id" component={ManageCommentPage} />
          <Route exact path="/comment" component={ManageCommentPage} />


        </div>
      </div>
    );
  }
}

export default App;
