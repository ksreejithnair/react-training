const domain = "http://localhost:3001"
//NEW
export const fetchAllCategories = ()=> fetch(domain+'/categories',{
  method: 'GET',
  headers: {
    'Authorization': 'somethign'
  }}).then((res) => { return res.json()})
   .then(( data ) => {return data})

export const fetchPosts = (category='')=> {
	category = category?category+'/':'';
	return fetch(domain+'/'+category+'posts',{
  method: 'GET',
  headers: {
    'Authorization': 'somethign'
  }}).then((res) => { return res.json()})
   .then(( data ) => {return data})
}


