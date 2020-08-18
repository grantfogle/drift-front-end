import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import DriftContextProvider from './contexts/DriftContext';


export default function App() {
  return (
    <DriftContextProvider style={styles.container}>
      <Home />
      <StatusBar style="auto" />
    </DriftContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
