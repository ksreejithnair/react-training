import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {updatePostVote,
				deletePostAction
				} from '../actions';
import Modal from 'react-modal';
import AddPost from './AddPost.js';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';


class Post extends Component {
	state = {
		editModalOpen: false
	}
	deletePost = () => {

	}

	closeEditModal = () => this.setState({editModalOpen:false});

	updateVote = (e,postId,upOrDown) => {
		e.preventDefault();
		const option = {option:upOrDown};
		this.props.dispatch(updatePostVote(postId, option))
	}
	deletePost = (postId) => {
		this.props.dispatch(deletePostAction(postId));
		this.props.history.goBack();
	}
	render() {
		//const post = this.props.posts[this.props.post.id];
		//console.log(this.props);
		const {post,showEdit,fromPostList} = this.props;
		if(post&&post.deleted === true) { return <Redirect to="/"/>}
		const {editModalOpen} = this.state;
		return <div className="postContainer">
					<div className="postHeader">
						<div>Posted By:<strong>{post.author}</strong>
							<span className="floatRight">{new Date(post.timestamp).toLocaleString('en-US')}</span>
						</div>
					</div>
					<h2 className="postTitle">{post.title}</h2>
					{!fromPostList&&<div>{post.body}</div>}
					<div className="commentFooter postFooter">
						<span className="floatLeft">Total Comments: {post.commentCount}</span>
						Vote Score
						<span className="operator" onClick={(e)=>this.updateVote(e,post.id,'downVote')}>-</span>
							{post.voteScore}
						<span className="operator" onClick={(e)=>this.updateVote(e,post.id,'upVote')}>+</span>
						{showEdit && <div className="floatRight">
							<button className="marginRight5 smallButton" onClick={()=>{Modal.setAppElement('body');
									this.setState({editModalOpen:true})}}>Edit</button>
							<button className="smallButton" onClick={()=>this.deletePost(post.id)}>Delete</button>
						</div>}
					</div>
					<Modal
	          className='Modal'
	          overlayClassName='overlay'
	          isOpen={editModalOpen}
	          onRequestClose={this.closeEditModal}
	          contentLabel='Modal'
	          shouldCloseOnOverlayClick={true}
	        >
	        	<AddPost post={post} onCloseModal={()=>this.closeEditModal()}/>
	        </Modal>
				</div>
		}
	}

Post.propTypes = {
	post: PropTypes.object.isRequired,
	showEdit: PropTypes.bool.isRequired
}

export default withRouter(connect()(Post));