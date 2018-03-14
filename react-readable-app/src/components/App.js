import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import CategoryList from './CategoryList.js';
import PostsList from './PostsList.js';
import {connect} from 'react-redux';
import {SORT_TYPE, sortPosts} from '../actions';
import {withRouter,Switch, Route} from 'react-router-dom';
import PostDetails from './PostDetails.js';
import AddPost from './AddPost.js';
import Modal from 'react-modal';

//NEW
class App extends Component {
	sortPosts = function(posts,sortType,sortOrder) {
		this.props.dispatch(sortPosts(posts,sortType,sortOrder));
	}

	state = {
		addPostModalOpen: false
	}

	openAddPostModal = () => {
		Modal.setAppElement('body');
		this.setState({addPostModalOpen:true});
	}

	closeAddPostModal = () => {
		this.setState({addPostModalOpen:false});
	}

  render() {
  	//console.log(this.props);
  	const {addPostModalOpen} = this.state;
  	return (
      <div className="App">
      	<Switch>
      		<Route path="/" exact render={()=>{
      			return <div>
      				<div className="header">
      					<div className="right-aligned menu" onClick={this.openAddPostModal}>
      						Add Post
      					</div>
			      		<div className="right-aligned menu">
			      			Sort By Vote
			      			<div className="menuContent">
				      			<span onClick={()=>this.sortPosts(this.props.posts,'vote','ASC')}>vote Asc</span>
				      			<span onClick={()=>this.sortPosts(this.props.posts,'vote', 'DSC')}>Vote Dsc</span>
				      		</div>
			      		</div>
			      		<div className="right-aligned menu">
			      			Sort By Time
			      			<div className="menuContent">
				      			<span onClick={()=>this.sortPosts(this.props.posts,'time','ASC')}>vote Asc</span>
				      			<span onClick={()=>this.sortPosts(this.props.posts,'time', 'DSC')}>Vote Dsc</span>
				      		</div>
			      		</div>
			      	</div>
			      	<div className="AppBody">
					      <div className="AppSidebar">
					      	<CategoryList/>
					      </div>
					      <div className="AppRBody">
					      	<PostsList/>
					      </div>
				    	</div>
							<Modal
			          className='Modal'
			          overlayClassName='overlay'
			          isOpen={addPostModalOpen}
			          onRequestClose={this.closeAddPostModal}
			          contentLabel='Modal'
			          shouldCloseOnOverlayClick={true}
			        >
			        	<AddPost onCloseModal={()=>this.closeAddPostModal()}/>
			        </Modal>
				  	</div>
      		}}/>
      		<Route path="/post/:id" render={({match, history})=>{
      			return <div>
      				<div className="header">
			      		<div className="right-aligned menu" onClick={()=>{history.push('/')}}>
			      			Back
			      		</div>
			      	</div>
			      	<PostDetails postId={match.params.id}/>
			      </div>
      		}}/>
	      </Switch>

      </div>
    );
  }
}


//TODO: move these conversion to a common function in utils so no need to repeat same code in all components
const mapStateToProps = ({categories, posts})=>({
		posts: Object.keys(posts).map((postKey)=>(posts[postKey])),
		categories: Object.keys(categories).map((categoryKey)=>(categories[categoryKey]))
})

export default withRouter(connect(mapStateToProps)(App));
