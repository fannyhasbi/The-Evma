import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = (props) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Welcome to Evma!</Text>
    <Button
      title="Go to Application"
      onPress={() => props.navigation.navigate('App')}
    />
  </View>
);

export default HomeScreen;