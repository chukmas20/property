import { Image, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';


const HomeItems = ({home}) => {
  return (
    <View style={{margin:10}}>
      <Image source = {{
           uri:home.image
        }}
         style = {styles.image}
     />
      <Text style={styles.rent}> ₦{home.rent}</Text>
      <View>
         <Text style={styles.title}> {home.houseType}</Text>
          <View style={styles.row}>
             <FontAwesome name="map-marker" size={24} color="black" /> 
             <Text style={styles.address}>{home.location}</Text>
          </View>
      </View>
    </View>
  )
}

export default HomeItems

const styles = StyleSheet.create({
    homeContainer:{
      width:"100%",
      marginVertical:10,
      padding:7,
    },
    image:{
      width:"100%",
      aspectRatio: 5/3,
      marginBottom:5,
      borderRadius:5
    },
    row:{
      flexDirection:"row",
      alignItems:'center',
    },
    address:{
      marginLeft: 10,
      color:"gray"
    },
    title:{
      fontSize:16,
      fontWeight:"600"
    },
    rent:{
       position:'absolute',
       margin:20,
       backgroundColor:"white",
       padding:5,
       borderRadius:5
    }
  });
  