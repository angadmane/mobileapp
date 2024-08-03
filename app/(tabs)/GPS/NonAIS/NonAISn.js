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
import AISimg from "../../../../assets/AIS140.png";

const GPS = () => {
  const navigation = useNavigation();
  const PHmag = () => {
    console.log("nav to Mag ");
    navigation.navigate("Mag");
  };
  const PHwithoutRelay = () => {
    console.log("nav to withoutRelay ");
    navigation.navigate("withoutRelay");
  };
  const PHwithRelay = () => {
    console.log("nav to withRelay ");
    navigation.navigate("withRelay");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tile} onPress={PHmag}>
      <Image source={AISimg} style={styles.gpsImage} />
        <View>
          <Text>Magnetic</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tile} onPress={PHwithoutRelay}>
      <Image source={AISimg} style={styles.gpsImage} />
        <View>
          <Text>Non-AIS Without Relay</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tile} onPress={PHwithRelay}>
      <Image source={AISimg} style={styles.gpsImage} />
        <View>
          <Text>Non-AIS With Relay</Text>
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
