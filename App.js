import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://hkbus.app/zh' }}
        style={{ flex: 1, width: '100%' }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red', // Change background color to red
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});
