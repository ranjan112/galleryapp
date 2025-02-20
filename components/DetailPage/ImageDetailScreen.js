import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const ImageDetailScreen = ({ route }) => {
  const { image } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: image.urls.full }} style={styles.image} />
      <Text style={styles.title}>{image.alt_description || 'No description'}</Text>
      <Text style={styles.photographer}>Photo by {image.user.name}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  photographer: {
    fontSize: 16,
    color: '#777',
  },
});

export default ImageDetailScreen;
