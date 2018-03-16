import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
import {fetchCategories,fetchPostsAction} from './actions'

const store = createStore(reducer, applyMiddleware(thunk));
store.dispatch(fetchCategories());
store.dispatch(fetchPostsAction());

ReactDOM.render(


	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
	,
	 document.getElementById('root')
);
registerServiceWorker();
