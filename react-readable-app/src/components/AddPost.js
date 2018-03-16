import React,{Component} from 'react';
import serializeForm from 'form-serialize';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {uuidv4} from '../utils/utils.js';
import {addPost,updatePost} from '../actions'


/**
 *@description - This component is reused for add and update post.
 */
class AddPost extends Component {

	/**
	 *
	 *@description - This funciton accepts postId and if postId is there
	 *								it will send update dispatch else add dispatch.
	 */
	addPostSelf = function(e,postId) {
		e.preventDefault();
		const value = serializeForm(e.target,{hash:true});
		value.timestamp = Date.now();
		if(postId) {
			this.props.dispatch(updatePost(postId,value));
		} else {
			value.id= uuidv4();
			this.props.dispatch(addPost(value));
		}

		this.closeAddPostModal();
//		console.log(value);
	}

	closeAddPostModal = () =>{
		this.props.onCloseModal();
	}

	render(){
		const {categories, post} = this.props;
		return <div>
			<div className="modalHeader"><button className="smallButton floatRight" onClick={this.closeAddPostModal}>close</button></div>
	    	<form onSubmit={(e)=>this.addPostSelf(e,post&&post.id)}>
	    		<p><label>Name:</label><input type="text" name="author" defaultValue={post&&post.author}/></p>
	    		<p><label>Title:</label><input type="text" name="title" defaultValue={post&&post.title}/></p>
	    		<p><label>Content:</label><textarea name="body" className="postBodyTextArea" defaultValue={post&&post.body}></textarea></p>
	    		<p><label>Category:</label><select name="category" defaultValue={post&&post.category}>
	    			{categories.map((category)=>(<option key={category.name} value={category.name}>{category.name}</option>))}
	    		</select></p>
	    		<p><button>Save</button></p>

	    	</form>
	    </div>
	}
}

AddPost.propTypes = {
	onCloseModal: PropTypes.func.isRequired,
	post: PropTypes.object
}

const mapStatetoProps = ({categories}) =>{
	return {
		categories: Object.keys(categories).map((categoryKey)=>categories[categoryKey])
	}
}

export default connect(mapStatetoProps)(AddPost);