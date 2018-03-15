//NEW
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Post from './Post.js'

class PostsList extends Component {

  render() {
  	const {posts} =this.props;
  	//console.log(posts);
  	return (
  		<div>
      	{posts.map((post)=>{
      		return <Link to={`/post/${post.id}`} activeStyle={{ color: 'yellow' }}>
          <div key={post.id}>
            <Post post={post}/>
          </div></Link>
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