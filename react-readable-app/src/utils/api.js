import {uuidv4} from './utils.js';

const domain = "http://localhost:3001"
//NEW
export const fetchAllCategories = ()=> fetch(domain+'/categories',{
  method: 'GET',
  headers: {
    'Authorization': 'some'
  }}).then((res) => { return res.json()})
   .then(( data ) => {return data})

export const fetchPosts = (category='')=> {
	category = category?category+'/':'';
	return fetch(domain+'/'+category+'posts',{
  method: 'GET',
  headers: {
    'Authorization': 'some'
  }}).then((res) => { return res.json()})
   .then(( data ) => {return data})
}

export const fetchPostApi = (postId) =>{
	return fetch(domain+'/posts/'+postId,{
		method: 'GET',
		headers: {
    'Authorization': 'some'
  }}).then((res)=>{return res.json()})
  		.then((data)=>{return data})
}

export const fetchPostCommentsApi = (postId) => {
	return fetch(domain+'/posts/'+postId+'/comments',{
		method: 'GET',
		headers: {
			'Authorization': 'some'
		}
	}).then((res)=>{return res.json()})
		.then((data)=>{return data})
}

export const addCommentApi = (comment) =>{
//	console.log(comment);
	return fetch(domain+'/comments',{
		method: 'POST',
		headers: {
    	'Authorization': 'some',
    	'Content-Type': 'application/json'
  	},
  	body: JSON.stringify(comment)
	}).then((res)=>{return res.json()})
		.then((data)=>{return data})
}

export const deleteCommentApi = (commentId) =>{
	return fetch(domain+'/comments/'+commentId,{
		method: 'DELETE',
		headers: {
			'Authorization': 'some',
    	'Content-Type': 'application/json'
		}
	}).then((res)=>{return res.json()})
		.then((data)=>{return data})
}

export const updateCommentApi = (commentBody,commentId) => {
	return fetch(domain+'/comments/'+commentId,{
		method: 'PUT',
		headers: {
			'Authorization': 'some',
    	'Content-Type': 'application/json'
		},
		body: JSON.stringify(commentBody)
	}).then((res)=>{return res.json()})
		.then((data)=>{return data})
}

//Ideally this can be reused for post vote aswell.
export const updateCommentVoteApi = (commentId, option) => {
	return fetch(domain+'/comments/'+commentId,{
		method: 'POST',
		headers: {
			'Authorization': 'some',
    	'Content-Type': 'application/json'
		},
		body: JSON.stringify(option)
	}).then((res)=>{return res.json()})
		.then((data)=>{return data})
}

export const updatePostVoteApi = (postId, option) => {
	return fetch(domain+'/posts/'+postId,{
		method: 'POST',
		headers: {
			'Authorization': 'some',
    	'Content-Type': 'application/json'
		},
		body: JSON.stringify(option)
	}).then((res)=>{return res.json()})
		.then((data)=>{return data})
}

export const addPostApi = (post) => {
	return fetch(domain+'/posts',{
		method: 'POST',
		headers: {
			'Authorization': 'some',
    	'Content-Type': 'application/json'
		},
		body: JSON.stringify(post)
	}).then((res)=>{return res.json()})
		.then((data)=>{return data})
}



