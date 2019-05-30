import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Routes from "./components/Routes";

type Props = {};
export default class Main extends Component<Props> {
  render() {
    return (
      <Routes/>
    );
  }
}

