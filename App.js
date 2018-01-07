import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.base}>
        <Header title={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});
