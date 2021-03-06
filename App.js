import React from 'react';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './redux/configureStore';
import AppContainer from './navigators/AppContainerNavigator';

import Icon from './components/Icon';
const { persistor, store } = configureStore();

export default class App extends React.Component {
  state = {
    loading: true
  };

  handleError = e => console.error(e);
  handleLoaded = () => this.setState({ loading: false });
  loadAssets = async () => {
    await Asset.loadAsync(Object.values(Icon));
  };

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <AppLoading
          startAsync={this.loadAssets}
          onFinish={this.handleLoaded}
          onError={this.handleError}
        />
      );
    } else {
      return (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <AppContainer />
          </PersistGate>
        </Provider>
      );
    }
  }
}
