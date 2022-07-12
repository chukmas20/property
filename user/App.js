import { StatusBar } from 'expo-status-bar';
import {  StyleSheet,  View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import HomeDetailsScreen from './src/screens/HomeDetailsScreen';
// import homes from "./assets/data/homes.json"
// import HomeItems from './src/components/HomeItems';


export default function App() {
  return (
    <View >
        {/* <HomeScreen   /> */}
         <HomeDetailsScreen  />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer:{
    width:"100%",
    marginVertical:50,
    padding:7,
  },
});
