import React, { Component } from "react";

class Post extends Component {
  render() {
    const { postTitle, postBody } = this.props;
    return (
      <div className="article">
        <h4>{postTitle}</h4>
        <p>{postBody}</p>
      </div>
    );
  }
}
export default Post;
