import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {updatePostVote} from '../actions';
import Modal from 'react-modal';
import AddPost from './AddPost.js'


class Post extends Component {
	state = {
		editModalOpen: false
	}
	deletePost = () => {

	}

	updatePost = () =>{

		const value = {body:this.textarea.value};
	}
	closeEditModal = () => this.setState({editModalOpen:false});

	updateVote = (e,postId,upOrDown) => {
		e.preventDefault();
		const option = {option:upOrDown};
		this.props.dispatch(updatePostVote(postId, option))
	}
	render() {
		const {post} = this.props;
		const {editModalOpen} = this.state;
		return <div className="postContainer">
					<h2 className="postTitle">{post.title}</h2>
					<div>Posted:{post.timestamp}</div>
					<div>{post.author}</div>
					<div>{post.body}</div>
					<div>Vote Score{post.voteScore}</div>
					<div>{post.commentCount}</div>
					<div className="commentFooter postFooter">
						Vote Score
						<span className="operator" onClick={(e)=>this.updateVote(e,post.id,'downVote')}>-</span>
							{post.voteScore}
						<span className="operator" onClick={(e)=>this.updateVote(e,post.id,'upVote')}>+</span>
						<div className="floatRight">
							<button className="marginRight5 smallButton" onClick={()=>this.setState({editModalOpen:true})}>Edit</button>
							<button className="smallButton" onClick={this.deletePost}>Delete</button>
						</div>
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
	post: PropTypes.object.isRequired
}


export default connect()(Post);