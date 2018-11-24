import React from 'react'
import * as contentful from 'contentful'

import Navbar from '../Global/Navbar/Navbar';
import BlogItem from './BlogItem/BlogItem';

class Blog extends React.Component {
  state = {
    posts: []
  }
  client = contentful.createClient({
    space: '5bn9q0airq7w',
    accessToken: '4b25a0a20b2ebc037d5b960990915530c5c87c6c0cb8d26f8bb67db56a8b42c7'
  })
  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }
  fetchPosts = () => this.client.getEntries()
  setPosts = response => {
    this.setState({
      posts: response.items
    })
  }
  render() {
    return (
        <React.Fragment>
            <Navbar />
            <div>
                <p>This is the Blog Page</p>
                <br/>
                { this.state.posts.map(({fields}, i) =>
                    <BlogItem key={i} {...fields} />
                )}
            </div>
        </React.Fragment>
    )
  }
}
export default Blog