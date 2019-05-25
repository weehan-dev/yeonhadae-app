import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import AccountNavigator from '../../navigators/AccountNavigator';
import MainNavigator from '../../navigators/MainNavigator';

export default class extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    initApp: PropTypes.func
  };

  render() {
    const { isLoggedIn, profile } = this.props;
    return (
      <Container>
        {isLoggedIn ? (
          profile ? (
            <>
              <SafeView />
              <MainNavigator screenProps={{ profile }} />
            </>
          ) : (
            <>
              <SafeView />
              <MainNavigator />
            </>
          )
        ) : (
          <AccountNavigator />
        )}
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
`;

const SafeView = styled.SafeAreaView`
  flex: 0;
`;
