import React, {Component} from 'react';
import {NavLink, Route, Switch} from 'react-router-dom'
import asyncComponent from '../../hoc/asyncComponent'
import './Blog.css';
const Posts = asyncComponent(() => import('./Posts/Posts'))
const NewPost = asyncComponent(() => import('./NewPost/NewPost'))
// import NewPost from './NewPost/NewPost'
// asyncComponent do: Webpack create a new chunk which initially not included into main code bundle
// - reducing init bundle size
// it allows you to load component when the first time it needed

class Blog extends Component {
  state = {
    auth: true
  }

  render() {
    return (
      <div className={'Blog'}>
        <header>
          <nav>
            <ul>
              {/* NavLink add class active to <a>
               You can override active classname by passing prop activeClassName={'my-active'}*/}
              <li><NavLink exact to={'/'}>Home</NavLink></li>
              <li><NavLink exact to={'/posts'}>Posts</NavLink></li>
              <li><NavLink exact to={{
                pathname: '/new-post',
                hash: '#submit',
                search: '?quick-submit=true'
              }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        {/*<Route path={'/'} exact render={() => <h1>Home 1</h1>} />*/}
        {/* Switch tells react load only one route at the time - first matched */}
        <Switch>
          {this.state.auth ? <Route path={'/new-post'} exact component={NewPost}/> : null}
          <Route path={'/posts'} component={Posts}/>
          <Route path={'/'} render={() => <h1 style={{textAlign: 'center'}}>Welcome to Home</h1>}/>
          {/*
            Catch any unknown routes
            <Route render={() => <h1>Page not found</h1>}/>
            Or use <Redirect> component
          */}
          {/*<Route path={'/:id'} exact component={FullPost} />*/}
        </Switch>
      </div>
    );
  }
}

export default Blog;