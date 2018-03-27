import React, { Component } from 'react';
import { 
	View, 
	Text
} from 'react-native';
import Decks from '../Components/Decks.js'
import AddDeck from '../Components/AddDeck.js'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { fetchDecksApi, addDeck, addDecks, addCard } from '../utils/api.js'
import { connect } from 'react-redux'
import { receivedDecksAction } from '../actions'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import DeckDetails from './DeckDetails.js'
import AddCard from './AddCard.js'
import Quiz from './Quiz.js'

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: ({tintColor})=><View><Text style={{ color: tintColor }}>DECKS</Text></View>,
      tabBarIcon: ({tintColor})=><MaterialCommunityIcons name='cards-variant' size={20} color={tintColor}/>
    }
  },
  AddDecks: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: ({tintColor})=><View><Text style={{ color: tintColor }}>NEW DECK</Text></View>,
      tabBarIcon: ({tintColor})=><MaterialIcons name='playlist-add' size={20} color={tintColor}/>
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

const Stack = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header:false
    }
  },
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title,
    })
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: ({ navigation }) => ({
      title: 'Add Card',
    })
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      title: 'Quiz',
    })
  }
})

class Main extends Component {
	componentDidMount() {
		fetchDecksApi('decks').then((data)=>{
        	this.props.dispatch(receivedDecksAction({decks:data}));
        	this.setState({decks:data});
      });
	}

	render(){
		return <Stack/>
	}
}

const mapStateToProps = ({decks}) => {
	return {
		decks
	}
} 

export default connect(mapStateToProps)(Main);