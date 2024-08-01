import React, { useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert,TouchableOpacity,ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import {Picker  } from '@react-native-picker/picker';
import DatePicker from '@react-native-community/datetimepicker';
import Checkbox from 'expo-checkbox';

const RegistrationForm = () => {  
  const [error, setError] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  
  const {
    control,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      gender: "",
      birthdate: new Date(),
      maritalStatus:"",
      address:"",
      emailAddress:"",
      enquiryAbout:{
        vehicalInsurance: false,
        gpsDevice:false,
        licInsurance:false,
        healthInsurance:false,
        loan:false,
        Other:false
      }
    },
  });

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
    control.setValue('birthdate', currentDate.toISOString());
  };

  const onSubmit = (data) => {
    
    if (Object.keys(errors).length === 0) {
      console.log(data);
    }   
  };

  return (
    <ScrollView>
    <View style={styles.container}>
    <View style={styles.inputWrapper}>
    <Text style={styles.title}>Let's complete your profile...</Text>
    </View>
    <View style={styles.inputWrapper}>
      <Text style={styles.label}>First Name</Text>
      <View style={[styles.inputContainer, error ? styles.inputContainerError : null]}>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
             keyboardType="alphanumeric"
          placeholder="First Name"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="firstName"
        rules={{ required: true }}
      />
      </View>
      {errors.firstName && <Text style={styles.error}>Please enter first name.</Text>}
      </View>

      <View style={styles.inputWrapper}>
      <Text style={styles.label}>Middle Name (Optional)</Text>
      <View style={[styles.inputContainer, error ? styles.inputContainerError : null]}>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
          style={styles.input}
          keyboardType="alphanumeric"
          placeholder="Middle Name"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="middleName"
      />
      </View>
      </View>

      <View style={styles.inputWrapper}>
<Text style={styles.label}>Last Name</Text>
      <View style={[styles.inputContainer, error ? styles.inputContainerError : null]}>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
          style={styles.input}
         keyboardType="alphanumeric"
          placeholder="Last Name"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="lastName"
        rules={{ required: true }}
      />
      </View>
{errors.lastName && <Text style={styles.error}>Please enter last name.</Text>}
</View>

   <View style={styles.inputWrapper}>
        <Text style={styles.label}>Select Gender</Text>
        <View style={[styles.inputContainer, error ? styles.inputContainerError : null]}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Picker
                selectedValue={value}
                onValueChange={(itemValue) => onChange(itemValue)}
                style={styles.input}
              >
                <Picker.Item label="Please Select" value="" />
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Other" value="other" />
              </Picker>
            )}
            name="gender"
            rules={{ required: true }}
          />
        </View>
        {errors.gender && <Text style={styles.error}>Please select a gender.</Text>}
      </View>

      {/* Date Picker */}
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Date of Birth</Text>
        <TouchableOpacity
          style={[styles.inputContainer, error ? styles.inputContainerError : null]}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={[styles.input,{textAlignVertical:'center'}]}>{date.toDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DatePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChangeDate}
            name="birthdate"
          />
        )}
        {errors.birthdate && <Text style={styles.error}>Please select a date.</Text>}
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Marital Status</Text>
        <View style={[styles.inputContainer, error ? styles.inputContainerError : null]}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Picker
                selectedValue={value}
                onValueChange={(itemValue) => onChange(itemValue)}
                style={styles.input}
              >
                <Picker.Item label="Please Select" value="" />
                <Picker.Item label="Unmarried" value="unmarried" />
                <Picker.Item label="Married" value="married" />                
                <Picker.Item label="Widow" value="widow " />
                <Picker.Item label="Divorced" value="divorced" />
                <Picker.Item label="Separated" value="separated" />
              </Picker>
            )}
            name="maritalStatus"
            rules={{ required: true }}
          />
        </View>
        {errors.maritalStatus && <Text style={styles.error}>Please select a marital status.</Text>}
      </View>

      <View style={styles.inputWrapper}>
<Text style={styles.label}>Address</Text>
      <View style={[styles.inputContainer, error ? styles.inputContainerError : null]}>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
          style={styles.input}
         keyboardType="alphanumeric"
          placeholder="Address"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="address"
        rules={{ required: true }}
      />
      </View>
{errors.address && <Text style={styles.error}>Please enter address.</Text>}
</View>

<View style={styles.inputWrapper}>
<Text style={styles.label}>Email Address</Text>
      <View style={[styles.inputContainer, error ? styles.inputContainerError : null]}>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
          style={styles.input}
         keyboardType="email"
          placeholder="Email Address"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="emailAddress"
      />
      </View>
{/* {errors.emailAddress && <Text style={styles.error}>Please enter a valid email address.</Text>} */}
</View>


<View style={styles.inputWrapper}>
          <Text style={styles.label}>Enquiry About:</Text>
          <View style={styles.checkboxContainer}>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <View style={styles.checkboxItem}>
                  <Checkbox
                    value={value.vehicalInsurance}
                    onValueChange={(newValue) => onChange({ ...value, vehicalInsurance: newValue })}
                    style={styles.checkbox}
                  />
                  <Text style={styles.checkboxLabel}>Vehical</Text>
                </View>
              )}
              name="enquiryAbout.vehicalInsurance"
            />
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <View style={styles.checkboxItem}>
                  <Checkbox
                    value={value.gpsDevice}
                    onValueChange={(newValue) => onChange({ ...value, gpsDevice: newValue })}
                    style={styles.checkbox}
                  />
                  <Text style={styles.checkboxLabel}>GPS</Text>
                </View>
              )}
              name="enquiryAbout.gpsDevice"
            />
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <View style={styles.checkboxItem}>
                  <Checkbox
                    value={value.licInsurance}
                    onValueChange={(newValue) => onChange({ ...value, licInsurance: newValue })}
                    style={styles.checkbox}
                  />
                  <Text style={styles.checkboxLabel}>LIC</Text>
                </View>
              )}
              name="enquiryAbout.licInsurance"
            />
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <View style={styles.checkboxItem}>
                  <Checkbox
                    value={value.loan}
                    onValueChange={(newValue) => onChange({ ...value, loan: newValue })}
                    style={styles.checkbox}
                  />
                  <Text style={styles.checkboxLabel}>Loan</Text>
                </View>
              )}
              name="enquiryAbout.loan"
            />
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <View style={styles.checkboxItem}>
                  <Checkbox
                    value={value.Other}
                    onValueChange={(newValue) => onChange({ ...value, Other: newValue })}
                    style={styles.checkbox}
                  />
                  <Text style={styles.checkboxLabel}>Other</Text>
                </View>
              )}
              name="enquiryAbout.Other"
            />           
          </View>
        </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      
    </View>
    </ScrollView> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#Efffff',
 },
 title:{
  fontSize: 18,
  fontWeight:'bold',
  marginTop: 10,
    marginBottom: 10,
    textAlign: 'left',
    width: '80%',
 },
  label: {
    fontSize: 15,
    marginBottom: 5,
    textAlign: 'left',
    width: '80%',
  },
  inputWrapper:{
    marginBottom:10
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
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
    fontSize: 15,
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
    textAlign: 'left',
    width: '80%',
  },
  checkboxContainer: {
    flexDirection: 'column',
    alignItems: 'left', 
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  checkbox: {
    marginRight: 10,
    marginBottom:10
  },
  checkboxLabel: {
    fontSize: 15,
    marginBottom:10,
    width:'65%'
  },
  
});

export default RegistrationForm