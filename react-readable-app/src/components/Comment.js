import React, {Component} from 'react';
import {connect} from 'react-redux';
import{deleteComment} from '../actions';
import PropTypes from 'prop-types';

class Comment extends Component {

	deleteComment = ()=>{
		this.props.dispatch(deleteComment(this.props.comment.id))
	}
	render() {
		const {comment} = this.props;

		return <div className="commentContainer">
							<div><span>{comment.author} says</span>
							<span className="floatRight">{comment.timestamp}</span></div>

							<div className="commentBody">
								<h4>{comment.title}</h4>
								<p>{comment.body}</p>
							</div>
							<div className="commentFooter">
								Vote Score<span className="operator">-</span>{comment.voteScore}<span className="operator">+</span>
								<div className="floatRight" onClick={this.deleteComment}>Delete</div>
							</div>
						</div>
 	}
}

Comment.propTypes = {
	comment: PropTypes.object.isRequired
}

export default connect()(Comment);