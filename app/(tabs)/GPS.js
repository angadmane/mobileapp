import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Touchable,
} from "react-native";
import React from "react";

const GPS = () => {
  const pressHandler = () => {
    console.log("Via Phone ");
    navigation.navigate("(GPS)");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tile} onPress={pressHandler}>
        <Image
          source={require("../../assets/AIS140.png")}
          style={styles.gpsImage}
        />
        <View>
          <Text>AIS 140</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.tile}>
        <Image
          source={require("../../assets/AIS140.png")}
          style={styles.gpsImage}
        />
        <Text>Non-AIS</Text>
      </View>
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
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default GPS;
