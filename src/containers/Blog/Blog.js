import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom'
import './Blog.css';
import Posts from './Posts/Posts'
import FullPost from '../Blog/FullPost/FullPost'
import NewPost from '../../containers/Blog/NewPost/NewPost'

class Blog extends Component {
  render() {
    return (
      <div className={'Blog'}>
        <header>
          <nav>
            <ul>
              {/* NavLink add class active to <a>
               You can override active classname by passing prop activeClassName={'my-active'}*/}
              <li><NavLink exact to={'/'}>Home</NavLink></li>
              <li><NavLink exact to={{
                pathname: '/new-post',
                hash: '#submit',
                search: '?quick-submit=true'
              }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        {/*<Route path={'/'} exact render={() => <h1>Home 1</h1>} />*/}
        <Route path={'/'} exact component={Posts} />
        <Route path={'/new-post'} component={NewPost} />
        <Route path={'/:id'} exact component={FullPost} />
      </div>
    );
  }
}

export default Blog;