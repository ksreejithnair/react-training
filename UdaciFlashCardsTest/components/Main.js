import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Tabs = TabNavigator({
  Decks: {
    screen: ()=>(<View><Text>Decks</Text></View>),
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ()=><MaterialCommunityIcons name='cards-variant' size={30} color='#000000'/>
    }
  },
  AddDecks: {
    screen: ()=>(<View><Text>Decks</Text></View>),
    navigationOption: {
      tabBarLabel: 'Add New Deck'
    }
  }
},{
  navigationOptions: {
  	headers:false
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

	render(){
		return (
				<Tabs/>
		)
	}
}

export default Main;