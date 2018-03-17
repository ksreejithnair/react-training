import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPostComments,
				fetchPost} from '../actions';
import Post from './Post.js';
import Comment from './Comment.js';
import AddCommentForm from './AddCommentForm.js';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import NoMatch from './NoMatch.js'

class PostDetails extends Component{

	componentDidMount(){
		//Fetching post and comments for post details page.
		this.props.dispatch(fetchPost(this.props.postId));
		this.props.dispatch(fetchPostComments(this.props.postId));
	}

	state = {
		comments: [],
		post: {}
	}

	render(){
		const {postsObj,postId,comments} = this.props;
		const post = postsObj[postId];
		const postedDate = post&&new Date(post.timestamp);
		return <div>
			{post&&
				<Post post={post} showEdit={true}/>
			}
			{
				post&&comments.map((comment)=>{
					return !comment.deleted&&<Comment comment={comment} key={comment.id}/>
				})}
				{post&&<AddCommentForm postId={postId}/>}
				{!post&&<NoMatch/>}

		</div>
	}
}

function mapStateToProps({categories,posts,comments}){
	return {
		posts: Object.keys(posts).map((postKey)=>(posts[postKey])),
		postsObj: posts,
		comments: Object.keys(comments).map((commentKey)=>(comments[commentKey])),
		categories: Object.keys(categories).map((categoryKey)=>(categories[categoryKey]))
	}
}

PostDetails.propTypes = {
	postId: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(PostDetails);