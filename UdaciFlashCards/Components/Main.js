import React, { Component } from 'react';
import { 
	View, 
	Text
} from 'react-native';
import Decks from '../Components/Decks.js'
import AddDeck from '../Components/AddDeck.js'
import { TabNavigator } from 'react-navigation'
import { fetchDecksApi, addDeck, addDecks, addCard } from '../utils/api.js'
import { connect } from 'react-redux'
import { receivedDecksAction } from '../actions'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ()=><MaterialCommunityIcons name='cards-variant' size={30} color='#000000'/>
    }
  },
  AddDecks: {
    screen: AddDeck,
    navigationOption: {
      tabBarLabel: 'Add New Deck'
    }
  }
},{
  navigationOptions: {
    //tabBarOnPress: refresh
  },
  tabBarOptions: {
    activeTintColor: '#000',
    style: {
      height: 56,
      backgroundColor: '#fff',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    }
  }
});

class Main extends Component {
	componentDidMount() {
		fetchDecksApi('decks').then((data)=>{
        	data=JSON.parse(data);
          //console.log(data);
        	this.props.dispatch(receivedDecksAction({decks:data}));
        	this.setState({decks:data});
      });
	}

	render(){
		return <Tabs/>
	}
}

const mapStateToProps = ({decks}) => {
	return {
		decks
	}
} 

export default connect(mapStateToProps)(Main);