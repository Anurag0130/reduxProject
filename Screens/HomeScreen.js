import React from 'react';
import { Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Note', { name: 'Jane' })
      }
    />
  );
};

export default HomeScreen;
