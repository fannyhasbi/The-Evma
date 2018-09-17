import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { Container, Header, Content, Button, Text, Left, Right, Body, Title } from 'native-base';

class DashboardScreen extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isLoad: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });

    this.setState({ isLoad: true });
  }

  render(){
    if(!this.state.isLoad){
      return <Text>Waiting...</Text>
    }

    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Dashboard</Title>
          </Body>
          <Right />
        </Header>
        <Content contentContainerStyle={styles.container}>
          <Text>This is Dashboard Screen</Text>
          <Button
            block
            success
            style={styles.container}
          >
            <Text>Confirm Registrants</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default DashboardScreen;