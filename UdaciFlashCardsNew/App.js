import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './components/Main.js'
import { TabNavigator } from 'react-navigation'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Decks from './components/Decks.js'

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ()=><MaterialCommunityIcons name='cards-variant' size={30} color='#000000'/>
    }
  },
  AddDecks: {
    screen: Decks,
    navigationOption: {
      tabBarLabel: 'Add New Deck'
    }
  }
});

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Tabs />
      </View>
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
});

