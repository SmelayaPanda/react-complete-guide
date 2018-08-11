import React, {Component} from 'react';
import axios from "../../../axiosInstance";
import Post from '../../../components/Post/Post'
import './Posts.css'

class Posts extends Component {
  state = {
    posts: []
  }

  postSelectedHandler = (id) => {
    this.setState({selectedPostId: id});
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
      return <Post
        key={post.id}
        title={post.title}
        author={post.author}
        clicked={() => this.postSelectedHandler(post.id)}/>
    })

    return (
      <section className={'Posts'}>
        {posts}
      </section>
    );
  }
}

export default Posts;