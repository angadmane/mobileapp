import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Touchable,
    Linking,
  } from "react-native";
  import React from "react";
  import { Link, useNavigation } from 'expo-router';
  import FontAwesome from '@expo/vector-icons/build/FontAwesome';
  
  const GPS = () => {
    const navigation = useNavigation()
    const PHmining = () => {
      console.log("NON AIS ");
      navigation.navigate('mining');
    };
    const PHtrans = () => {
      console.log("Non ");
      navigation.navigate('(Trans)');
    };
    return (
      <View style={styles.container}>

        <TouchableOpacity style={styles.tile} onPress={PHmining}>
          <Image
            source={require("../../../../assets/AIS140.png")}
            style={styles.gpsImage}
          />
          <View>
            <Text>Magnetic</Text>
          </View>
        </TouchableOpacity>
  
       
        <TouchableOpacity style={styles.tile} onPress={PHtrans}>
          <Image
            source={require("../../../../assets/AIS140.png")}
            style={styles.gpsImage}
          />
          <View><Text>Without Relay</Text></View>
          </TouchableOpacity>
        
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "Top",
      height: "100%",
    },
    tile: {
      width: "40%",
      height: "20%",
      backgroundColor: "#f3f7ff",
      justifyContent: "center",
      alignItems: "center",
      //borderWidth: 1,
      margin: "5%",
      borderColor: "black",
      borderRadius: 15,
    },
    gpsImage: {
      width: "80%",
      height: "80%",
      resizeMode: "contain",
    },
  });
  
  export default GPS;
  