import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

const MainRouteComp = (props) => (
  <Text>Main Page {props.username}</Text>
);

const mapStateToProps = (state) => {
  return {
    username: state.username
  }
}

const MainRoute = connect(mapStateToProps)(MainRouteComp);

export default MainRoute;