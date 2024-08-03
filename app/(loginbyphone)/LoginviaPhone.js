import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginviaPhone = () => {
  const [mobilenumber, setMobilenumber] = useState("9876543210");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const navigation = useNavigation();

  const handleOTPChange = (mobilenumber) => {
    setMobilenumber(mobilenumber);
  };

  const handleBlur = () => {
    if (!mobilenumber || mobilenumber.length !== 10 || isNaN(mobilenumber)) {
      setError("Please enter a valid 10-digit mobile number.");
      setIsValid(false);
    } else {
      setError("");
      setIsValid(true);
    }
  };

  const handleSubmit = () => {
    // Basic validation
    if (!mobilenumber || mobilenumber.length !== 10 || isNaN(mobilenumber)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Proceed to OTP screen
    navigation.navigate("OTPscreen", { mobileNumber: mobilenumber });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Mobile Number</Text>
      <View
        style={[
          styles.inputContainer,
          error ? styles.inputContainerError : null,
        ]}
      >
        <TextInput
          style={[styles.input, isValid ? styles.inputValid : null]}
          keyboardType="numeric"
          placeholder="Enter Mobile"
          onChangeText={handleOTPChange}
          onBlur={handleBlur}
          value={mobilenumber}
        />
        {isValid && <Text style={styles.tickMark}>✓</Text>}
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Verify Mobile Number</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#Efffff",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "left",
    width: "80%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#138B7F",
    backgroundColor: "#ffffff",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  inputContainerError: {
    borderColor: "red",
  },
  input: {
    height: 50,
    flex: 1,
    fontSize: 16,
  },
  inputValid: {
    borderColor: "#1ccfbe",
  },
  tickMark: {
    color: "#1ccfbe",
    fontSize: 20,
    marginLeft: "auto",
  },
  button: {
    width: "80%",
    backgroundColor: "#1ccfbe",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  error: {
    color: "red",
    marginBottom: 10,
    textAlign: "left",
    width: "80%",
  },
});

export default LoginviaPhone;
