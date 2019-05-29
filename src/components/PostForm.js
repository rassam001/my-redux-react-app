import React, { Component } from "react";

export default class PostForm extends Component {
  titleRef = React.createRef();
  textRef = React.createRef();
  submitHandler = e => {
    e.preventDefault(); // stop the event
    const post = {
      title: this.titleRef.current.value,
      body: this.textRef.current.value,
      userId: 1
    };

    this.props.addPost(post);

    e.target.reset(); // reset the form
  };
  render() {
    return (
      <div className="App-form">
        <h3>Add a post</h3>
        <form onSubmit={this.submitHandler}>
          <div>
            <label htmlFor="postTitle">Title: </label>
            <input
              type="text"
              name="postTitle"
              id="postTitle"
              ref={this.titleRef}
            />
          </div>
          <div>
            <label htmlFor="postBody">Text: </label>
            <textarea name="postBody" id="postBody" ref={this.textRef} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
