/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,StyleSheet,View,Text,
} from 'react-native';
import { WebView } from 'react-native-webview';


const App: () => Node = () => {
 
  return (
    <SafeAreaView style={styles.container}>

        <WebView
        style={{flex:1}}
        source={{uri: 'https://www.hetnacnc.com/'}}
        javaScriptEnabled={true}
        //cache
        ></WebView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
});

export default App;
