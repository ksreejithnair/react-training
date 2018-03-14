//NEW
import React, { Component } from 'react';
import {connect} from 'react-redux';


class PostsList extends Component {

  render() {
  	const {posts} =this.props;
  	//console.log(posts);
  	return (
  		<div>
      	{posts.map((post)=>{
      		return <div key={post.id}>
          {post.body}
          </div>
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