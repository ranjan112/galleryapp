import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

const UNSPLASH_API_KEY = 'Jk95eW0W9iRkkLrAUEAveokB3PD4X3uV8AhUVixH5Cc';
const BASE_URL = 'https://api.unsplash.com/photos/';

const Login = ({navigation}) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  // Fetch images from Unsplash API
  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${BASE_URL}?client_id=${UNSPLASH_API_KEY}&page=${page}&per_page=10`,
      );
      setImages(prevImages => [...prevImages, ...response.data]);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  const loadMoreImages = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = image => {
    // Navigate to the image detail screen and pass the image data
    navigation.navigate('ImageDetailScreen', {image});
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => handleImageClick(item)}
      style={styles.imageContainer}>
      <Image source={{uri: item.urls.small}} style={styles.image} />
      <Text style={styles.title}>
        {item.alt_description || 'No description'}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Gallery</Text>
      {loading && page === 1 ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          onEndReached={loadMoreImages}
          onEndReachedThreshold={0.1}
          ListFooterComponent={
            loading && <ActivityIndicator size="small" color="#0000ff" />
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  imageContainer: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Login;
