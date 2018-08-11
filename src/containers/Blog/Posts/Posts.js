import React, {Component} from 'react';
import axios from "../../../axiosInstance";
import Post from '../../../components/Post/Post'
import './Posts.css'

class Posts extends Component {
  state = {
    posts: []
  }

  postSelectedHandler = (id) => {
    // this.props.history.push({pathname: '/' + id}) // the same what do Link class
    this.props.history.push('/' + id) // or simple variant
  }

  componentDidMount() {
    console.log(this.props);
    axios.get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 4)
        const updatedPosts = posts.map(post => {
          return {...post, author: 'Panda'} // transform data before view
        })
        this.setState({posts: updatedPosts});
      })
      .catch(err => {
        // this.setState({error: true});
        console.log(err);
      })
  }

  render() {
    const posts = this.state.posts.map(post => {
      return (
        // <Link to={'/' + post.id} key={post.id}>
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id)}/>
        // </Link>
      )
    })

    return (
      <section className={'Posts'}>
        {posts}
      </section>
    );
  }
}

export default Posts;