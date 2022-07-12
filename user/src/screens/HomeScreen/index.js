import React from 'react';
import { FlatList, StyleSheet,  View } from 'react-native';
import homes from "../../../assets/data/homes.json";
import HomeItems from '../../components/HomeItems';


const HomeScreen = () => {
  return (
    <View style={styles.homeContainer} >
       <FlatList   
          data={homes} 
          renderItem={({item})=> <HomeItems home={item}  />}  
          showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    homeContainer:{
      width:"100%",
      marginVertical:50,
      padding:7,
    },
  });
  

export default HomeScreen