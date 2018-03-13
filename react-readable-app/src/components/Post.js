import React, {Component} from 'react';


class Post extends Component {

	render() {
		const {post} = this.props;
		return <div className="postContainer">
					<h2 className="postTitle">{post.title}</h2>
					<div>Posted:{post.timestamp}</div>
					<div>{post.author}</div>
					<div>{post.body}</div>
					<div>Vote Score{post.voteScore}</div>
					<div>{post.commentCount}</div>
				</div>
		}
	}


export default Post;