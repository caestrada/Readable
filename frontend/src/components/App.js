import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './common/Header';
import HomePage from './home/HomePage';
import ManagePostPage from './post/ManagePostPage';
import PostDetailPage from './post/PostDetailPage';
import CategoryPage from './category/CategoryPage';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="content" className="container">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/post/new" component={ManagePostPage} />
          <Route path="/post/edit/:id" component={ManagePostPage} />
          <Route exact path="/post/:id" component={PostDetailPage} />
          <Route exact path="/category" component={CategoryPage} />
        </div>
      </div>
    );
  }
}

export default App;
