import React, { Component } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import axios from 'axios';

import AlbumItem from './AlbumItem';

export default class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      albums: []
    };
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
         .then(response => this.setState({
           albums: response.data,
           isLoading: false
         }));
  }

  render() {
    if (this.state.isLoading) {
          return (
            <View style={{ flex: 1, paddingTop: 20 }}>
              <ActivityIndicator />
            </View>
          );
        }

    return (
      <FlatList
        data={this.state.albums}
        renderItem={(album) => (
          <AlbumItem key={album.item.title} item={album.item} />
        )}
      />
    );
  }
}
