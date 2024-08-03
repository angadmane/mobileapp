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
import { Link, useNavigation } from "expo-router";
import FontAwesome from "@expo/vector-icons/build/FontAwesome";
import AIS140 from "../../../../assets/AIS140.png";
const GPS = () => {
  const navigation = useNavigation();
  const PHmining = () => {
    console.log("nav to Mining ");
    navigation.navigate("mining");
  };
  const PHtrans = () => {
    console.log("nav to Trans ");
    navigation.navigate("(Trans)");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tile} onPress={PHmining}>
        <Image source={AIS140} style={styles.gpsImage} />
        <View>
          <Text>Mining1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tile} onPress={PHtrans}>
        <Image source={AIS140} style={styles.gpsImage} />
        <View>
          <Text>Transportation</Text>
        </View>
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
    backgroundColor: '#Efffff',
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
