import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import AISimg from "../../../../assets/AIS140.png";
const mining = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={[styles.container]}>
        <View style={styles.tile}>
        <Image source={AISimg} style={styles.gpsImage} />
        </View>
        <View>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in
          ipsum consequat, volutpat nunc eu, tempus nisi. Curabitur laoreet
          efficitur ornare. Donec a libero venenatis odio molestie faucibus sed
          eget nibh. Vivamus sodales nisi quis dolor lacinia interdum. Morbi
          efficitur magna non mattis varius. Quisque quis lacus convallis sapien
          rhoncus sollicitudin. Vivamus volutpat finibus massa. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          rhoncus sollicitudin. Vivamus volutpat finibus massa. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Sed suscipit vitae est sed tristique. Praesent eget neque iaculis
          mus. Sed suscipit vitae est sed tristique. Praesent eget neque iaculis
          dolor tempus luctus efficitur eu massa. Fusce at iaculis nisl. dsfdsfdsfdsfds Kashinath
        </Text>
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
   flex:1,
   padding:10,
   marginBottom:300,
  },
  tile: {
    Width: "30%",
    height: "20%",
    backgroundColor: "#f3f7ff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    margin: "5%",
    borderColor: "black",
    borderRadius: 15,
    margin:10
  },
  gpsImage: {
    width: "100%",
    height: "100%",
    resizeMode: 'contain',
  },
  text: {
    fontSize: 20, // Adjust font size as needed
    color: '#000',
  },
});
export default mining;
