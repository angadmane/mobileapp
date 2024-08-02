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
//import AIS140Menu from "(AIS140)";
const GPS = () => {
  const navigation = useNavigation();
  const PHais140 = () => {
    console.log("nav to AIS140 ");
    navigation.navigate("(GPStabmenu)//(AIS140)");
  };
  const PHnonais = () => {
    console.log("nav to Non-AIS ");
    navigation.navigate("(GPStabmenu)");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tile} onPress={PHais140}>
        <Image
          source={require("../../assets/AIS140.png")}
          style={styles.gpsImage}
        />
        <View>
          <Text>AIS 140</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tile} onPress={PHnonais}>
        <Image
          source={require("../../assets/AIS140.png")}
          style={styles.gpsImage}
        />
        <View>
          <Text>Non-AIS</Text>
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
