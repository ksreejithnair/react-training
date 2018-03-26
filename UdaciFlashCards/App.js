import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Decks from './Components/Decks.js'
import AddDeck from './Components/AddDeck.js'
import { TabNavigator } from 'react-navigation'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { fetchDecks, addDeck, addDecks, addCard } from './utils/api.js'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index.js'
import Main from './Components/Main.js'
/*
const refresh = (obj)=>{
  if(obj.scene.route.key == 'Decks') {
    fetchDecks('decks').then((data)=>{
        data=JSON.parse(data);
         console.log(data);
      obj.jumpToIndex(obj.scene.index);
    })
  }
  else {
    obj.jumpToIndex(obj.scene.index);
  }
  console.log(obj)
}

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
    tabBarOnPress: refresh
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
*/
//class App extends React.Component {
/*
  state = {
    decks: {}
  }

  componentDidMount(){
    
    /*addDecks({
      React: {
        title: 'React',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },
      JavaScript: {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      }
    });

    addDeck({
        title: 'Java',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      },'Java')
    addCard({
      title: 'Java',
      card:{
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
    }).then(()=>{
      const decksFromStorage = fetchDecks('decks').then((data)=>{
        console.log(data);
      })
    })


    fetchDecks('decks').then((data)=>{
        data=JSON.parse(data);
        this.setState({decks:data});

      });
    
   //console.log(decksFromStorage);
  }

  refresh() {
    console.log('refresh called');
  }
*/
class App extends React.Component {
  render() {

    //const {decks} = this.props;
    //console.log(decks);
    return (
      <Provider store={createStore(reducer, applyMiddleware(thunk))}>
        
          <Main/>

      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hblack: {
    color: 'black'
  }
});
