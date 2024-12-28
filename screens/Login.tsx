
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';
import "../global.css"
// type script
type LoginProps = {
  navigation: any;
};

const Login: React.FC<LoginProps>= ( { navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please fill out all fields');
    } else {
      Alert.alert('Login Successful');
    }
  };

  const handleSignUp = () => {
    Alert.alert('Sign Up', 'Redirecting to the sign-up page...');
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://res.cloudinary.com/dm2smhi6q/image/upload/v1735224592/yo7zlpzrtvlyofgwtptf.png',
        }}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to Soft Webtechs Solutions</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <View style={styles.row}>
        <TouchableOpacity>
          <Text style={styles.rememberMe}>Remember Me</Text>
        </TouchableOpacity>
        <TouchableOpacity >
          <Text onPress={() => navigation.navigate('Forgot') } style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Don't have an account?{' '}
        <Text  className='text-amber-500' onPress={handleSignUp}>
          Sign up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  rememberMe: {
    fontSize: 14,
  },
  link: {
    fontSize: 14,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    marginTop: 20,
    fontSize: 14,
  },
});

export default Login;