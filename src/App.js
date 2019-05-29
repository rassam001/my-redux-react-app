import React, { Component } from "react";

import Post from "./components/Post";
import PostForm from "./components/PostForm";

import "./App.css";

class App extends Component {
  state = {
    posts: []
  };
  async componentDidMount() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    // console.log(data);
    this.setState({ posts: data });
  }
  addPost = obj => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        ...obj
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
        const posts = this.state.posts;
        posts.push(json);
        this.setState({ posts });
      });
  };
  render() {
    return (
      <section className="App">
        <header className="App-header">
          <h1>my Redux-React App</h1>
        </header>
        <section className="App-content">
          <PostForm addPost={this.addPost} />
          <article className="App-articles">
            <h3>Posts</h3>
            {this.state.posts.map(post => (
              <Post key={post.id} postTitle={post.title} postBody={post.body} />
            ))}
          </article>
        </section>
      </section>
    );
  }
}

export default App;
