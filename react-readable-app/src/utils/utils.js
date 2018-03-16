/*
 * this funciton accepts array and return an object
 */
export function normalizePosts(postArr) {
	return postArr.reduce((result,post)=>{
				result[post.id] = post;
				return result;
			}, {});
}

export function normalizeComments(commentArr) {
	return commentArr.reduce((result,comment)=>{
		result[comment.id] = comment;
		return result;
	}, {});
}

//Not real GUID though
export function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}