
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

const Forgot = () => {
  const [email, setEmail] = useState('');

  //  I useMethod to show an alert for unfilled space
  const handleSendOtp = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your registered email ID.');
    } else {
      
      console.log("");
      Alert.alert('Success');
    }
  };

  return (
    <>
    <View style={styles.container}>
      <Image
        source={{ uri: "https://res.cloudinary.com/dm2smhi6q/image/upload/v1735224592/yo7zlpzrtvlyofgwtptf.png" }}
        style={styles.logoImage}
      />
      <View style={styles.box}>
        <Text style={styles.logo}>SWS</Text>
        <Text style={styles.title}>Forgot Your Password</Text>
        <Text style={styles.subtitle}>
          Enter your email ID. We'll send you a code to reset your password.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Register Email ID"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
          <Text style={styles.buttonText}>Send OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  box: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  logoImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default Forgot;