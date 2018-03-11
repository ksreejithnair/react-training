//NEW
import React, { Component } from 'react';
import {connect} from 'react-redux';


class PostsList extends Component {

  render() {
  	const {posts} =this.props;
  	//console.log(categories);
  	return (
  		<div>
      	{posts.map((post)=>{
      		return <div className="post.id" key={post.author}>{`Author${post.author}Time${new Date(post.timestamp)}`}</div>
      	})}
      </div>
    );
  }
}

function mapStateToProps({posts}){
	return {
		posts: Object.keys(posts).map((postKey)=>(posts[postKey]))
	};
};

export default connect(mapStateToProps)(PostsList);