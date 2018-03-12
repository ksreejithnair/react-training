import { combineReducers } from 'redux';
import { normalizePosts,
				normalizeComments } from '../utils/utils.js'

import {
	RECEIVE_CATEGORIES,
	RECEIVE_POSTS,
	SORT_POSTS,
	FETCH_POST,
	GET_POST_COMMENTS
} from '../actions/index.js'

//reducer for categories
function categories(state={},action) {
	const {categories} = action;
	switch(action.type) {
		case RECEIVE_CATEGORIES:
			let result = categories.reduce((result,category)=> {
				result[category.name] = category;
				return result;
			},{})
			return result;
		default:
			return state;
	}
}

function comments(state={},action) {
	const {comments} = action;
	switch(action.type) {
		case GET_POST_COMMENTS:
			console.log(comments);
			return normalizeComments(comments);
		default:
			return state;
	}
}

//Reducer for posts
function posts (state={}, action) {
	const {posts,sortType, sortOrder, post} = action;

	switch(action.type) {
		case RECEIVE_POSTS:
			let result =normalizePosts(posts);
			return result;
		case SORT_POSTS:
			//console.log('sort me');
			//console.log(state);
			posts.sort((post,nextPost)=>{
				switch(sortType){
					case 'vote':
					//console.log(sortOrder);
						if(post.voteScore > nextPost.voteScore) {
							return sortOrder === "ASC"?1:-1;
						}
						if(post.voteScore < nextPost.voteScore) {
							return sortOrder === "ASC"?-1:1;;
						}
						return 0;
					case 'time':
						if(post.timestamp > nextPost.timestamp) {
							return sortOrder === "ASC"?1:-1;
						}
						if(post.timestamp < nextPost.timestamp) {
							return sortOrder === "ASC"?-1:1;;
						}
						return 0;
					default:
						return 0;
				}
			});
			return normalizePosts(posts);
		case FETCH_POST:
			console.log(state);
			return {...state,[post.id]:post};
		default:
			return state;
	}
}

//NEW

export default combineReducers({categories,posts,comments})