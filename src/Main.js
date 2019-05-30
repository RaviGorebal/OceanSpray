import React, {Component} from 'react';
import {Platform, StyleSheet, Text,StatusBar, View} from 'react-native';
import Routes from "./components/Routes";

type Props = {};
export default class Main extends Component<Props> {
  render() {
    return (
      <View style={styles.appContainer}>
        <StatusBar backgroundColor="black" barStyle="dark-content" />
        <Routes />
      </View>
    );
  }
}

const styles = {
  appContainer: {
      flex: 1
  }
};

