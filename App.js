import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/home';
import SearchResultsScreen from './screens/searchResults';
import Post from './components/post';
import feed from './assets/data/feed';

const post1 = feed[0];

export default function App() {
  return (
    <View style={styles.container}>
     {/* <HomeScreen/> */}
    {/* <Post post ={post1}/> */} 
     <SearchResultsScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
