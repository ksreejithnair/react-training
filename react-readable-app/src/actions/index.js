//NEW
import {fetchAllCategories,
				fetchPosts,
				fetchPostCommentsApi,
				fetchPostApi,
				addCommentApi,
				deleteCommentApi,
				updateCommentApi,
				updateCommentVoteApi,
				addPostApi,
				updatePostVoteApi} from '../utils/api.js'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SORT_POSTS = 'SORT_POSTS';
export const GET_POST_COMMENTS = 'GET_POST_COMMENTS';
export const FETCH_POST = 'FETCH_POST';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const UPDATE_COMMENT_VOTE = 'UPDATE_COMMENT_VOTE';
export const ADD_POST = 'ADD_POST';
export const UPDATE_POST_VOTE = 'UPDATE_POST_VOTE';

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories:categories.categories //TODO:Not sure why it is coming as {categories:{categories:[{},{}]}
});

export const fetchCategories = () => dispatch => (
  fetchAllCategories()
  //{categories: [{name: "react", path: "react"}, {name: "redux", path: "redux"}, {name: "udacity", path: "udacity"}]}
      .then(categories => {dispatch(receiveCategories(categories))
      })
);

export const receivePosts = posts => ({
	type: RECEIVE_POSTS,
	posts
});

export const fetchPostAction = post => ({
	type: FETCH_POST,
	post
})

export const getPostComments = comments => ({
	type: GET_POST_COMMENTS,
	comments
});
export const updateCommentAction = comment => ({
	type: UPDATE_COMMENT,
	comment
});
export const updateCommentVoteAction = comment => ({
	type: UPDATE_COMMENT_VOTE,
	comment
})

export const updatePostVoteAction = post => ({
	type: UPDATE_POST_VOTE,
	post
})

export const addPostAction = post =>({
	type: ADD_POST,
	post
})

export const fetchPost = (postId) => (dispatch) => {
	return fetchPostApi(postId).then((data)=>dispatch(fetchPostAction(data)))
}

export const fetchPostComments = (postId) => (dispatch) => {
	return fetchPostCommentsApi(postId).then((data)=>{dispatch(getPostComments(data))})
}

export const fetchPostsAction = (category) => (dispatch) => {
	return fetchPosts(category).then((posts)=>{dispatch(receivePosts(posts))})
}

//Assuming success always. Also instead of fetching everythign may be I can only fetch new comment and update the store.
export const addComment = (comment) => (dispatch) =>{
	return addCommentApi(comment).then((data)=>{const postId = data.parentId;dispatch(fetchPost(postId));dispatch(fetchPostComments(postId))})
}

export const deleteComment = (commentId) =>(dispatch)=> {
	return deleteCommentApi(commentId).then((data)=>{const postId = data.parentId;dispatch(fetchPost(postId));dispatch(fetchPostComments(postId))})
}

export const updateComment = (commentBody,commentId) => (dispatch) => {
	return updateCommentApi(commentBody,commentId).then((data)=>{dispatch(updateCommentAction(data))})
}

export const updateCommentVote = (commentId,option) => (dispatch) => {
	return updateCommentVoteApi(commentId, option).then((data)=>{dispatch(updateCommentVoteAction(data))})
}

export const updatePostVote = (postId,option) => (dispatch) => {
	return updatePostVoteApi(postId, option).then((data)=>{dispatch(updatePostVoteAction(data))})
}

export const addPost = (post) => (dispatch) =>{
	return addPostApi(post).then((data)=>{dispatch(addPostAction(data))});
}


export function sortPosts (posts,sortType,sortOrder) {
	return {
		type: SORT_POSTS,
		posts,
		sortType,
		sortOrder
	}
}