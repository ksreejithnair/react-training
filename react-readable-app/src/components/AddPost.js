import React,{Component} from 'react';
import serializeForm from 'form-serialize';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {uuidv4} from '../utils/utils.js';
import {addPost} from '../actions'

class AddPost extends Component {

	addPostSelf = function(e) {
		e.preventDefault();
		const value = serializeForm(e.target,{hash:true});
		value.timestamp = Date.now();
		value.id= uuidv4();
		this.props.dispatch(addPost(value));
		this.closeAddPostModal();
		console.log(value);
	}

	closeAddPostModal = () =>{
		this.props.onCloseModal();
	}

	render(){
		const {categories} = this.props;
		return <div>
			<div className="modalHeader"><button className="smallButton" onClick={this.closeAddPostModal}>close</button></div>
	    	<form onSubmit={(e)=>this.addPostSelf(e)}>
	    		<p><label>Name:</label><input type="text" name="author"/></p>
	    		<p><label>Title:</label><input type="text" name="title"/></p>
	    		<p><label>Content:</label><textarea name="body"></textarea></p>
	    		<p><label>Category:</label><select name="category">
	    			{categories.map((category)=>(<option key={category.name} value={category.name}>{category.name}</option>))}
	    		</select></p>
	    		<p><button>Save</button></p>

	    	</form>
	    </div>
	}
}

AddPost.propTypes = {
	onCloseModal: PropTypes.func.isRequired
}

const mapStatetoProps = ({categories}) =>{
	return {
		categories: Object.keys(categories).map((categoryKey)=>categories[categoryKey])
	}
}

export default connect(mapStatetoProps)(AddPost);