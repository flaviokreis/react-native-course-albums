import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class CardSection extends Component {
  render() {
    return (
      <View style={styles.container}>
        { this.props.children }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
});
