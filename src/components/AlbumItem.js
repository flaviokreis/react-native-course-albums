import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Button, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

export default class AlbumItem extends Component {
  render() {
    const { title, artist, thumbnail_image, image, url } = this.props.item

    console.log(this.props.item)

    return (
      <Card>
        <CardSection>
          <Image
            style={styles.thumbnailImage}
            source={{ uri: thumbnail_image }}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{ title }</Text>
            <Text style={styles.subtitle}>{ artist }</Text>
          </View>
        </CardSection>

        <CardSection>
          <Image
            style={styles.image}
            source={{ uri: image }}
          />
        </CardSection>

        <View style={styles.buttonContainer}>
          <Button
            color='#7B1FA2'
            title="Buy it!"
            onPress={() => Linking.openURL(url)}
          />
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    marginLeft: 5,
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  title: {
    fontSize: 18,
    fontWeight: '600'
  },
  subtitle: {
    fontSize: 15,
    color: '#999'
  },
  thumbnailImage: {
    width: 50,
    height: 50
  },
  image: {
    height: 300,
    flex: 1,
    width: null
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 5,
    backgroundColor: '#FFF'
  }
});
