import { View, Text, StyleSheet, Image, Dimensions, ScrollView, } from 'react-native'
import React, { useState } from 'react';
import { MaterialCommunityIcons, Ionicons, FontAwesome,Feather,Octicons  } from '@expo/vector-icons';
import homes from "../../../assets/data/homes.json";


const home = homes[0]

const WIDTH = Dimensions.get('window').width;
  const HEIGHT = Dimensions.get('window').height;

const HomeDetailsScreen = () => {
  const [imgActive, setImgActive] = useState(0)

  const onChange =(nativeEvent)=>{
    if(nativeEvent){
       const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
       if(slide != imgActive){
         setImgActive(slide)
       }
    }
  }
  
  return (
    <View style={styles.container}
    >
      <View style={styles.wrap}>
      <ScrollView  
         onScroll={({nativeEvent}) => onChange(nativeEvent)}
         showsHorizontalScrollIndicator={false}
         pagingEnabled
         horizontal
         style={styles.wrap}
         >
      {
          home.images.map((img, index)=>( 
            <Image  
                 key={index}
                 resizeMode="stretch"
                source={{
                  uri: img
              }} 
              style={styles.wrap}

          />
          ))
         }
      </ScrollView>
      <View style={styles.dots}>
        {
          home.images.map((img, index)=>(
              <Text
                key={index}
                style={imgActive === index ? styles.dotActive : styles.dot}
               >
                  ●
              </Text>
          ))
        }
      </View>
      </View>
         <Feather name="arrow-left-circle" size={30} 
             color="black" 
             style={{position:"absolute",marginTop:20,marginLeft:5}}
            />
              <Text style={styles.rent}> ₦{home.rent}</Text>

         <View style={{marginLeft:10, marginVertical:20}}>
             <Text style={{fontSize:20, fontWeight:"bold"}}>{home.houseType}</Text>
             <View style={styles.address}>
             <FontAwesome name="map-marker" size={24} color="black" /> 
                <Text style={{marginLeft:10, color:"gray",fontSize:16, fontWeight:"400"}}>
                     {home.location}
                  </Text>
             </View>
             <View style={styles.icons} >
               <View 
                  style={{
                        flexDirection:"row",
                        marginHorizontal:10,
                        backgroundColor:"lightgray",
                        padding:5,
                        borderRadius:5
                      }}
                       >
                <Ionicons name="ios-bed-outline"
                    size={24} color="black"
                  /> 
                 <Text> {home.bedRooms} bedrooms</Text>
               </View>
               <View 
                   style={{
                    flexDirection:"row",
                    marginHorizontal:10,
                    backgroundColor:"lightgray",
                    padding:5,
                    borderRadius:5
                  }}
               >
                <MaterialCommunityIcons 
                    name="bathtub-outline" size={24} 
                    color="black" 
                  />
                  <Text> {home.bathRooms} bathrooms</Text>
               </View>
             </View>
             <View>
                 <Text style={styles.details}>Details</Text>
                 <Text style={styles.content}>
                     {home.description}
                   </Text>
             </View>
         </View>
          <View style={styles.button}>
             <Text style={styles.buttonText} > Book Apartment</Text>
          </View>
    </View>
  )
}

export default HomeDetailsScreen

const styles = StyleSheet.create({
   container:{
     marginVertical:60,
    //  margin:5
   },
//    image:{
//     width:"100%",
//     aspectRatio:4 / 3
//  },
  address:{
     flexDirection:"row",
     alignItems:"center",
     marginRight:10,
     marginVertical:5
  },
  icons:{
     flexDirection:"row",
     marginVertical: 20,
     alignItems:'center' 
  },
   details:{
     fontWeight:"bold",
     fontSize:16
  },
  content:{
     marginTop:20
  },
  rent:{
    position:'absolute',
    backgroundColor:"white",
    padding:5,
    borderRadius:5,
    marginLeft:100,
    marginTop:20
 },
 button:{
  backgroundColor:'black',
  padding:20,
  alignItems:"center",
  margin:10,
  borderRadius:10
 },
 buttonText:{
  color:"white",
  fontWeight:"bold",
  fontSize: 18
 },
 wrap:{
   width:WIDTH,
   height:HEIGHT * 0.35,
   
 },
 dots:{
    position:"absolute",
    flexDirection:"row",
    bottom:0,
    alignSelf:"center"
 },
 dotActive:{
   margin:3,
   color:"black"
 },
 dot:{
    margin:3,
    color:"white",
    
 }
 
}) 