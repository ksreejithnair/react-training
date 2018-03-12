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
		this.props.dispatch(fetchPost(this.props.postId));
		this.props.dispatch(fetchPostComments(this.props.postId));
		/*fetchPostCommentsApi(this.props.postId).then((data)=>{
			//console.log(data);
			this.setState({comments:data});
		});*/
	}

	state = {
		comments: [],
		post: {},
		editCommentModalOpen: false
	}
/*uthor: "thingtwo"

body: "Hi there! I am a COMMENT."

deleted: false

id: "894tuq4ut84ut8v4t8wun89g"

parentDeleted: false

parentId: "8xf0y6ziyjabvozdd253nd"

timestamp: 1468166872634

voteScore: 6

*/
	openEditCommentModal = () => this.setState({editCommentModalOpen:true});
	closeEditCommentModal = () => this.setState({editCommentModalOpen:false});
	render(){
		const {postsObj,postId,comments} = this.props;
		//const {comments} = this.state;
		const post = postsObj[postId];
		const postedDate = post&&new Date(post.timestamp);
		/*console.log(post&&typeof(postedDate));
		console.log(this.state);
		console.log(post);*/
		return <div>
			{post&&
				<Post post={post}/>
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