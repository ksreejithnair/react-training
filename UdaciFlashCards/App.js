import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Decks from './Components/Decks.js'
import AddDeck from './Components/AddDeck.js'
import { TabNavigator } from 'react-navigation'
import { MaterialCommunityIcons } from '@expo/vector-icons'


const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ()=><MaterialCommunityIcons name='cards-variant' size={30} color='#000000'/>
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOption: {
      tabBarLabel: 'Add New Deck'
    }
  }
},{
  navigationOptions: {
    header: null
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

export default class App extends React.Component {

  componentDidMount(){
    this.setState({
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
    })
  }

  render() {
    return (
      <Tabs />
    );
  }
}

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
