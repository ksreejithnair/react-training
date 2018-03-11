/*
 * this funciton accepts array and return an object
 */
export function normalizePosts(postArr) {
	return postArr.reduce((result,post)=>{
				result[post.id] = post;
				return result;
			}, {});
}