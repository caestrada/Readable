import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { loadCategories, loadPosts } from './actions';

const store = configureStore();
store.dispatch(loadCategories());
store.dispatch(loadPosts());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter><App /></BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
