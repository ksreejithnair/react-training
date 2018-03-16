import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPostComments,
				fetchPost} from '../actions';
import {fetchPostCommentsApi} from '../utils/api.js';
import Post from './Post.js';
import Comment from './Comment.js';
import AddCommentForm from './AddCommentForm.js';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

class PostDetails extends Component{

	componentDidMount(){
		//Fetching post and comments for post details page.
		this.props.dispatch(fetchPost(this.props.postId));
		this.props.dispatch(fetchPostComments(this.props.postId));
	}

	state = {
		comments: [],
		post: {},
		editCommentModalOpen: false
	}

	openEditCommentModal = () => this.setState({editCommentModalOpen:true});
	closeEditCommentModal = () => this.setState({editCommentModalOpen:false});

	render(){
		const {postsObj,postId,comments} = this.props;
		const post = postsObj[postId];
		const postedDate = post&&new Date(post.timestamp);
		return <div>
			{post&&
				<Post post={post} showEdit={true}/>
			}
			{
				comments.map((comment)=>{
					return !comment.deleted&&<Comment comment={comment} key={comment.id}/>
				})}
				<AddCommentForm postId={postId}/>

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