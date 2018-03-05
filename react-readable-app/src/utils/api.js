const API_ID = process.env.HOST
const APP_KEY = process.env.PORT
//NEW
export const fetchAllCategories = ()=> fetch(`http://localhost:3001/categories`,{
  method: 'GET',
  headers: {
    'Authorization': 'somethign'
  }}).then((res) => { return res.json()})
   .then(( data ) => {return data})


