import React from 'react';
import { Text, View, Button } from 'react-native';

const ProfileScreen = ({ route }) => {
  return (

    <View>
      <Text>This is {route.params.name}'s profile</Text>
     
    </View>

  )
};

export default ProfileScreen;
