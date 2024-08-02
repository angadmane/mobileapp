import {
  StyleSheet,
  Text,
  Touchable,
  View,
  TouchableOpacity,
  Image,
  Linking,
  Platform,
} from "react-native";
import { Link, useNavigation } from "expo-router";
import FontAwesome from "@expo/vector-icons/build/FontAwesome";

export default function Page() {
  const onPress = () => console.log("Hello pressed");
  const navigation = useNavigation();
  const pressHandler = () => {
    console.log("Via Whatsapp ");
    navigation.navigate("(tabs)");
  };

  const pressHandlerPhone = () => {
    console.log("Via Phone ");
    navigation.navigate("(loginbyphone)");
  };
  const handleClickPhone = () => {
    console.log("Via Phone ");
    navigation.navigate("(loginbyphone)");
    //navigation.navigate('LoginviaPhone')
  };
  const makeCallHandler = () => {
    let phonenumber = "";
    if (Platform.OS == "android") {
      phonenumber = "tel:${7020542033}";
    } else {
      phonenumber = "telprompt:${7020542033}";
    }

    Linking.openURL(phonenumber);
  };
  return (
    <View style={styles.wrapper}>
      <View
        style={[
          styles.container,
          {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "row",
          },
        ]}
      >
        <View style={styles.logoContainer}>
          <Image source={require("../assets/Logo.png")} style={styles.logo} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titlewelcome}>Welcome to</Text>
          <Text
            style={[
              styles.title,
              { borderBottomWidth: 2, borderColor: "#1ccfbe" },
            ]}
          >
            Laxmi Pandit
          </Text>
          <Text style={styles.titleslogon}>
            GPS & Insurance sales and Services
          </Text>
        </View>
      </View>
      <View style={styles.main}>
        {/* <Text style={styles.title}>Laxmi Pandit GPS, Insurance</Text> */}
        <TouchableOpacity style={styles.button} onPress={pressHandler}>
          <FontAwesome size={28} name="whatsapp" color="#ffffff" />
          <Text style={styles.whatsappText}>Login Via WhatsApp</Text>
          {/* <Text style={styles.phoneText}>Login Via WhatsApp</Text> */}
        </TouchableOpacity>
        <View>
          <Text style={styles.divider}>--------------OR--------------</Text>
        </View>

        <TouchableOpacity style={styles.button1} onPress={pressHandlerPhone}>
          <FontAwesome size={28} name="phone" color="#138B7F" />
          <Text style={styles.phoneText}>Login Via Phone</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button1} onPress={makeCallHandler}>
          <FontAwesome size={28} name="phone" color="#138B7F" />
          <Text style={styles.phoneText}>Call on xxxxx89898</Text>
        </TouchableOpacity>

        <Text style={styles.agriment}>
          By continuing, you agree with our{" "}
          <TouchableOpacity
            style={{ fontSize: 10 }}
            onPress={() => Linking.openURL("/")}
          >
            <Text style={{ color: "blue", textAlignVertical: "top" }}>
              {" "}
              privacy policy
            </Text>
          </TouchableOpacity>{" "}
          and{" "}
          <TouchableOpacity style={{ fontSize: 10 }} onPress={handleClickPhone}>
            <Text style={{ color: "blue", textAlignVertical: "top" }}>
              {" "}
              terms of use
            </Text>
          </TouchableOpacity>{" "}
          &nbsp;terms of use.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    backgroundColor: "#EFFFFF",
  },
  container: {
    alignItems: "center",
  },
  logoContainer: {
    marginRight: 10,
  },
  logo: {
    width: 110,
    height: 200,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
  },
  main: {
    alignItems: "center",
  },
  titlewelcome: {
    fontSize: 18,
    marginHorizontal: "auto",
    textTransform: "uppercase",
  },
  titleslogon: {
    fontSize: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlignVertical: "auto",
  },
  divider: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#aaa",
    marginTop: 25,
  },
  button: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#1ccfbe",
    color: "#FFFFFF",
    padding: 10,
    borderRadius: 4,
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "center",
  },
  whatsappText: {
    color: "#FFFFFF",
    marginLeft: 10, // Space between icon and text
  },
  button1: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 10,
    width: "100%",
    borderRadius: 4,
    borderColor: "#138B7F",
    borderWidth: 1,
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "center",
  },
  whatsappclass: { color: "#FFFFFF" },
  agriment: {
    fontSize: 14,
    color: "#aaa",
    marginTop: 25,
  },
  phoneText: {
    color: "#1ccfbe",
    marginLeft: 10, // Space between icon and text
  },
});
