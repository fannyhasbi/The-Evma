import React from 'react';
import { Provider } from 'react-redux';

import store from './src/store/index';
// import MainRoute from './components/index';
import AppRoute from './components/app';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppRoute />
      </Provider>
    );
  }
}
