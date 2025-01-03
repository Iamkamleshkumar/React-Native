
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';

// import "../global.css"
// // type script
// type LoginProps = {
//   navigation: any;
// };

// const Login: React.FC<LoginProps>= ( { navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     if (email === '' || password === '') {
//       Alert.alert('Error', 'Please fill out all fields');
//     } else {
//       Alert.alert('Login Successful');
//     }
//   };

//   const handleSignUp = () => {
//     Alert.alert('Sign Up', 'Redirecting to the sign-up page...');
//   };

//   return (
//     <View style={styles.container}>
//       <Image
//         source={{
//           uri: 'https://res.cloudinary.com/dm2smhi6q/image/upload/v1735224592/yo7zlpzrtvlyofgwtptf.png',
//         }}
//         style={styles.logo}
//       />
//       <Text style={styles.title}>Welcome to Soft Webtechs Solutions</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />

//       <View style={styles.row}>
//         <TouchableOpacity>
//           <Text style={styles.rememberMe}>Remember Me</Text>
//         </TouchableOpacity>
//         <TouchableOpacity >
//           <Text onPress={() => navigation.navigate('Forgot') } style={styles.link}>Forgot Password?</Text>
//         </TouchableOpacity>
//       </View>

//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Log In</Text>
//       </TouchableOpacity>

//       <Text style={styles.footerText}>
//         Don't have an account?{' '}
//         <Text onPress={()=>navigation.navigate('SingUp')}>
//           Sign up
//         </Text>
//       </Text>
//       <View>
//         <Text className='p-11 col-start-5 text-red-600'>Hello</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//     padding: 20,
//   },
//   logo: {
//     width: 100,
//     height: 100,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 18,
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 15,
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginBottom: 20,
//   },
//   rememberMe: {
//     fontSize: 14,
//   },
//   link: {
//     fontSize: 14,
//     color: '#007BFF',
//     textDecorationLine: 'underline',
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     paddingVertical: 15,
//     width: '100%',
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   footerText: {
//     marginTop: 20,
//     fontSize: 14,
//   },
// });

// export default Login;

// import { View, Text ,ScrollView} from 'react-native'
// import React from 'react'
// import axios from 'axios'
// import { useEffect,useState } from 'react'
// import { Button, TextInput } from 'react-native-paper'

// const Login = () => {

//   const [item,setItem]= useState([]);


//   const api=async()=>{
//     await axios.get('https://curd-api-men.onrender.com/api/products').then(res=>setItem(res.data))
  
//   }
  
//   useEffect(()=>{
//     api();
  
//   }, [])

//   return (
//     <ScrollView>
//       <View>
//       <Text>Login</Text>
//       <TextInput placeholder='Enter item name'></TextInput>
//       <TextInput placeholder='Enter price'></TextInput>

//       <TextInput placeholder='quantity'></TextInput>
//       <Button >ADD</Button>

//       {item.map((a:any,i)=>{
//         return(
//           <Text key={i}>name:{a.name},price{a.price}  </Text>

//         )

//       })}


//     </View>
//     </ScrollView>
//   )
// }

// export default Login

// import { View, Text } from 'react-native'
// import React from 'react'
// import { StyleSheet } from 'react-native';
// import { Button, DataTable } from 'react-native-paper';

// const Login = () => {
//   return (
//     <View>
     
   
//     </View>
//   )
// }

// export default Login
// const styles = StyleSheet.create({
//   container: {
//     padding: 15,
//   },
//   tableHeader: {
//     backgroundColor: '#DCDCDC',
//   },
// });



import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, DataTable, TextInput } from 'react-native-paper';

const Login= () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [editId, setEditId] = useState(null); 

  const fetchAPI = async () => {
    try {
      const res = await axios.get("https://curd-api-men.onrender.com/api/products");
      setItems(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddOrEdit = async () => {
    if (!name || !price || !quantity) {
      Alert.alert('Please fill all fields!');
      return;
    }

    // Validate numeric inputs
    if (isNaN(price) || isNaN(quantity) || price <= 0 || quantity <= 0) {
      Alert.alert('Price and Quantity should be positive numbers!');
      return;
    }

    const product = {
      name: name,
      price: parseFloat(price),
      quantity: parseInt(quantity),
    };

    try {
      if (editId) {
        // Update existing product
        await axios.put(`https://curd-api-men.onrender.com/api/products/${editId}`, product);
        setEditId(null);
      } else {
        // Add new product
        await axios.post("https://curd-api-men.onrender.com/api/products", product);
      }
      setName('');
      setPrice('');
      setQuantity('');
      fetchAPI();
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  const handleDelete = (id:any) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this product?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", onPress: async () => {
          try {
            await axios.delete(`https://curd-api-men.onrender.com/api/products/${id}`);
            fetchAPI();
          } catch (error) {
            console.error("Error deleting product:", error);
          }
        } }
      ]
    );
  };

  const handleEdit = (item:any) => {
    setName(item.name);
    setPrice(item.price.toString());
    setQuantity(item.quantity.toString());
    setEditId(item._id); // Set the edit ID to the product's ID
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product List</Text>
      <Text style={{ color: editId ? 'blue' : 'black', marginBottom: 10 }}>
        {editId ? "Editing Product" : "Add New Product"}
      </Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Quantity"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button mode="contained" onPress={handleAddOrEdit} style={styles.button}>
        {editId ? 'UPDATE' : 'ADD'}
      </Button>
      <ScrollView>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title numeric>Price</DataTable.Title>
            <DataTable.Title numeric style={{ paddingRight: 50}}>Quantity</DataTable.Title>
            <DataTable.Title>Actions</DataTable.Title>
          </DataTable.Header>

          {items && items.map((item, index) => (
            <DataTable.Row key={index}>
              <DataTable.Cell>{item.name}</DataTable.Cell>
              <DataTable.Cell numeric>{item.priceaa}</DataTable.Cell>
              <DataTable.Cell numeric style={{ paddingRight: 20 }}>{item.quantity}</DataTable.Cell>
              <DataTable.Cell>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Button onPress={() => handleEdit(item)} style={{ marginRight: 5 }}>
                    Edit
                  </Button>
                  <Button onPress={() => handleDelete(item._id)} color="red">
                    Delete
                  </Button>
                </View>
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 10,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
  },
  button: {
    marginBottom: 20,
  },
});

export default Login;
