import React from 'react';
import { Provider } from 'react-redux';

import store from './src/store/index';
import MainRoute from './components/index';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainRoute />
      </Provider>
    );
  }
}
