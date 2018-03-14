import React, {Component} from 'react';
import {connect} from 'react-redux';
import{deleteComment,
			updateComment,
			updateCommentVote} from '../actions';
import PropTypes from 'prop-types';
import serializeForm from 'form-serialize';


class Comment extends Component {

	state = {
		listOrEdit: 'list'
	}

	//TODO: need to move all dispatch to mapdispatchToState in connect
	deleteComment = ()=>{
		this.props.dispatch(deleteComment(this.props.comment.id))
	}
	handleSubmit = (e,comment) => {
		e.preventDefault();
		let value = serializeForm(e.target, {hash:true});
		value.timestamp = new Date().getTime();
		this.props.dispatch(updateComment(value,comment.id));
		this.setState({listOrEdit:'list'});
	}
	updateVote = (commentId,upOrDown) =>{
		const option = {'option':upOrDown};
		this.props.dispatch(updateCommentVote(commentId,option));
	}
	render() {
		const {comment} = this.props;
		const {listOrEdit} = this.state;

		return <div className="commentContainer">
							<div><span>{comment.author} says</span>
							<span className="floatRight">{comment.timestamp}</span></div>

							<div className="commentBody">
								<h4>{comment.title}</h4>
								{listOrEdit === 'list'&&<p>{comment.body}</p>}
								{(listOrEdit!=='list')&&(<form onSubmit={(e)=>this.handleSubmit(e,comment)}>
											<textarea defaultValue={comment.body} name="body"></textarea><button>Update Comment</button>
										</form>)
								}

							</div>
							<div className="commentFooter">
								Vote Score
								<span className="operator" onClick={()=>this.updateVote(comment.id,'downVote')}>-</span>
									{comment.voteScore}
								<span className="operator" onClick={()=>this.updateVote(comment.id,'upVote')}>+</span>
								<div className="floatRight">
									<button className="marginRight5 smallButton" onClick={()=>this.setState({listOrEdit:true})}>Edit</button>
									<button className="smallButton" onClick={this.deleteComment}>Delete</button>
								</div>
							</div>
						</div>
 	}
}

Comment.propTypes = {
	comment: PropTypes.object.isRequired
}

export default connect()(Comment);