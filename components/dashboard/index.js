import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class DashboardScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Ini dashboard</Text>
        <Button
          title="Konfirmasi"
          onPress={() => this.props.navigation.navigate('Konfirmasi')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  }
});

export default DashboardScreen;