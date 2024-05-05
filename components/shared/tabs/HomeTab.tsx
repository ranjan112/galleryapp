import React, { Component, useState } from 'react'
import {View,Text, Alert, TouchableOpacity,TouchableNativeFeedback, LayoutAnimation, StyleSheet} from 'react-native'
import { CardUI } from '../../others/Resuable';
import { fetch_movies } from '../functions';
import { FlashList } from "@shopify/flash-list";
import { IMAGE_URL } from '../constants';
import { useTranslation } from 'react-i18next';

const Home =React.memo((props) =>{
  const { t, i18n } = useTranslation();

  const [showLanguagesList, setOpenLanguagesList] = useState(false)

  const [movieList ,setMovieList] =React.useState([])
  const languages = [
    { name: 'english', code: 'en' },
    { name: 'arabic', code: 'ar' },
    
  ]
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }
  
  
   
const get_movies =React.useCallback(async() =>{
const request =await fetch_movies()
if(request ==undefined) return Alert.alert("an errddor came")
setMovieList(request.results)
},[])

React.useLayoutEffect(() =>{
  get_movies()
},[])

return (
   <View style={{flex:1,backgroundColor:'white'}}>
    {/* <CardUI /> */}
    <Text> {t('hello')}</Text>
    <FlashList
      data={movieList}
      renderItem={({item}:{item:any}) =><CardUI 
      image ={IMAGE_URL + item.backdrop_path}
      title={`${t(item.title)}`}
      desc={`${t(item.overview)}`}
      />}
      estimatedItemSize={200}
      onEndReached={() =>console.log('end is near')}
      onEndReachedThreshold={0}
      // @ts-ignore
      keyExtractor={item =>item.id}
    />
      <TouchableNativeFeedback onPress={() => {
        setOpenLanguagesList(!showLanguagesList)
        LayoutAnimation.configureNext(LayoutAnimation.create(200, 'easeInEaseOut', 'opacity'))
      }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{t('Change Language')}</Text>
        </View>
      </TouchableNativeFeedback>
      {showLanguagesList && <>
        {languages.map((item, index) => (
          <TouchableOpacity key={index} style={[styles.button, { paddingHorizontal: 24 }]}
            onPress={() => changeLanguage(item.code)}>
            <Text style={styles.buttonText}>{t(item.name)}</Text>
          </TouchableOpacity>
        ))}
      </>
      }
  
   
   </View>
      )
    
    });
    

    export default Home;

    const styles = StyleSheet.create({
      button: {
        padding: 10,
      },
      buttonText: {
        fontSize: 18,
        // color: Colors.primary,
      },
    })
   