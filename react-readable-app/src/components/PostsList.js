//NEW
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Post from './Post.js'

class PostsList extends Component {

  render() {
  	const {posts,category} =this.props;
    //If coming by clicking a category reucing the array to only that category.
    let result = '';
    let link = '/post/'
    if(category) {
      link = '/'+category+'/';
       result = posts.reduce((posts,post)=>{
        if(post.category === category){
          posts.push(post)
          return posts;
        } else
          return posts;
      },[])
    } else {
       result = posts;
    }

  	return (
  		<div>
        {category&&<div className="textCenter"><h1>{category}</h1></div>}
      	{result&&result.map((post)=>{
          return !post.deleted&&<Link to={`${link}${post.id}`} key={post.id}>
          <div>
            <Post post={post} showEdit={false} fromPostList={true}/>
          </div></Link>
      	})}
        {result.length<=0&&<div>No Post under this category</div>}
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