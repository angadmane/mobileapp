import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const OTPscreen = () => {
  const [otp, setOTP] = useState('123456');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false); 
  const navigation = useNavigation();

  const handleOTPChange = (otp) => {
    setOTP(otp);
    setIsValid(false); 
  };

  const handleBlur = () => {
    if (!otp || otp.length !== 6 || isNaN(otp)) {
      setError('Please enter a valid 6-digit OTP.');
      setIsValid(false);
    } else {
      setError('');
      setIsValid(true); 
    }
  };

  const handleSubmit = () => {
    if (!otp || otp.length !== 6 || isNaN(otp)) {
        setError('Please enter a valid 6-digit OTP.');
        return;
      }

    
    //navigation.navigate('(tabs)');
    navigation.navigate('(screen)'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter OTP sent on *****65487</Text>
      <View style={[styles.inputContainer, error ? styles.inputContainerError : null]}>
        <TextInput
          style={[styles.input, isValid ? styles.inputValid : null]}
          keyboardType="numeric"
          placeholder="Enter OTP"
          onChangeText={handleOTPChange}
          onBlur={handleBlur} // Validate on blur
          value={otp}
        />
        {isValid && (
          <Text style={styles.tickMark}>✓</Text>
        )}
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>VERIFY OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#Efffff',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'left',
    width: '80%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#138B7F',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  inputContainerError: {
    borderColor: 'red',
  },
  input: {
    height: 50,
    flex: 1,
    fontSize: 16,
  },
  inputValid: {
    borderColor: '#1ccfbe',
  },
  tickMark: {
    color: '#1ccfbe',
    fontSize: 20,
    marginLeft: 'auto', 
  },
  button: {
    width: '80%',
    backgroundColor: '#1ccfbe',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'left',
    width: '80%',
  },
});

export default OTPscreen;
