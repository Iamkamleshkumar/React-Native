import React from 'react';
import { View, Text, Button } from 'react-native';

// Navigation prop type
type HomeScreenProps = {
  navigation: any;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate('Detail')}
      />
     
    </View>
  );
};

export default HomeScreen;
