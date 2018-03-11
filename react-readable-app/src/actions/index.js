//NEW
import {fetchAllCategories, fetchPosts} from '../utils/api.js'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const ADD_RECIPE = 'ADD_RECIPE';
export const REMOVE_FROM_CALANDER = 'REMOVE_FROM_CALANDER';
export const SORT_POSTS = 'SORT_POSTS';

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

export const fetchPostsAction = (category) => (dispatch) => {
	return fetchPosts(category).then((posts)=>{console.log(posts);dispatch(receivePosts(posts))})
}

export function addRecipe({day, recipe, meal}) {
	return {
		type: ADD_RECIPE,
		recipe,
		day,
		meal
	}
}

export function removeFromCalendar({day, meal}){
	return {
		type: REMOVE_FROM_CALANDER,
		day,
		meal
	}
}

export function sortPosts (posts,sortType,sortOrder) {
	return {
		type: SORT_POSTS,
		posts,
		sortType,
		sortOrder
	}
}