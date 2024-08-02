import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";

const mining = () => {
  return (
    <ScrollView>
      <View>
        <Image
          source={require("../../../assets/AIS140.png")}
          style={styles.gpsImage}
        />

        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in
          ipsum consequat, volutpat nunc eu, tempus nisi. Curabitur laoreet
          efficitur ornare. Donec a libero venenatis odio molestie faucibus sed
          eget nibh. Vivamus sodales nisi quis dolor lacinia interdum. Morbi
          efficitur magna non mattis varius. Quisque quis lacus convallis sapien
          rhoncus sollicitudin. Vivamus volutpat finibus massa. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Sed suscipit vitae est sed tristique. Praesent eget neque iaculis
          dolor tempus luctus efficitur eu massa. Fusce at iaculis nisl. Aliquam
          gravida lectus sed sem lacinia, sit amet placerat tellus dignissim.
          Nulla ut molestie lectus, quis elementum urna. Morbi non commodo
          sapien. Sed pretium ipsum vel sem lacinia dapibus. Donec sodales
          ultricies semper. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Aliquam vehicula ligula a massa pulvinar ullamcorper. Ut
          faucibus mauris eu velit vehicula, in aliquam ipsum luctus. Curabitur
          orci diam, egestas in ultrices ut, pretium non nibh. Fusce dapibus
          euismod risus at pharetra. Integer fringilla lorem a felis auctor, in
          ultricies arcu vestibulum. Nunc elementum neque erat, feugiat porta
          turpis tincidunt non. Quisque sagittis sollicitudin varius. Ut
          sagittis pulvinar mollis. Proin quis lectus ornare, feugiat mauris sit
          amet, malesuada orci. Nunc condimentum rutrum erat id ultricies.
          Nullam sapien dui, facilisis ut ornare a, aliquet id metus. Nunc non
          porttitor neque. Fusce efficitur mauris quis justo aliquam, et lacinia
          ipsum auctor. Pellentesque sit amet scelerisque risus. Nulla facilisi.
          Maecenas sed neque luctus, pulvinar ipsum in, maximus metus. Nullam in
          nisl tortor. Vivamus ultricies ligula at sodales eleifend. Nullam
          vitae elit eget arcu bibendum laoreet. Vivamus aliquet, mauris in
          convallis aliquam, lacus velit sollicitudin ligula, non tempor nulla
          purus vel nisl. Pellentesque a congue sapien, id dignissim ligula.
        </Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    //flexDirection: "row",
    //flexWrap: "wrap",
    //justifyContent: "space-evenly",
    alignItems: "Top",
    height: "25%",
    width: "100%",
  },
  gpsImage: {
    width: "40%",
    height: "40%",
    resizeMode: "stretch",
  },
});
export default mining;
