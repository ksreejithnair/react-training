import React,{Component} from 'react';
import serializeForm from 'form-serialize';
import {uuidv4} from '../utils/utils.js';
import {connect} from 'react-redux';
import {addComment} from '../actions';
import PropTypes from 'prop-types';

class AddCommentForm extends Component {
	handleSubmit = (e, postId) => {
		e.preventDefault();
		const value = serializeForm(e.target, {hash:true});
		/*if(this.props.onCreateContact) {
			this.props.onCreateContact(value);
		}*/
		value.id= uuidv4();
		value.parentId = postId;
		value.timestamp = new Date().getTime();
		this.props.dispatch(addComment(value));
		console.log(value);
	}

	render() {
		const {postId} = this.props;
		return <form className="addCommentForm" onSubmit={(e)=>this.handleSubmit(e,postId)}>
					<h4>Add your comments</h4>
					<div>
						<div className="margin5"><label>Enter Name</label><input type="text" name="author" placeholder="Enter name"/></div>
						<div className="displayBlock margin5"><label>Enter Comment</label><textarea name="body" placeholder="Enter Comment"/></div>
						<button className="displayBlock margin5">Add Comment</button>
					</div>
				</form>

	}
}

const mapStateToProps = ({}) => ({

})

AddCommentForm.propTypes = {
	postId: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(AddCommentForm)