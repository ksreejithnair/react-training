//NEW
import {fetchAllCategories,
				fetchPosts,
				fetchPostCommentsApi,
				fetchPostApi,
				addCommentApi,
				deleteCommentApi} from '../utils/api.js'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SORT_POSTS = 'SORT_POSTS';
export const GET_POST_COMMENTS = 'GET_POST_COMMENTS';
export const FETCH_POST = 'FETCH_POST';

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
	return addCommentApi(comment).then((data)=>{console.log(data);const postId = data.parentId;dispatch(fetchPost(postId));dispatch(fetchPostComments(postId))})
}

export const deleteComment = (commentId) =>(dispatch)=> {
	return deleteCommentApi(commentId).then((data)=>{dispatch(fetchPostComments(data.parentId))})
}


export function sortPosts (posts,sortType,sortOrder) {
	return {
		type: SORT_POSTS,
		posts,
		sortType,
		sortOrder
	}
}