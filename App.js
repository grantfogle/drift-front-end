import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import DriftContextProvider from './contexts/DriftContext';
import Router from './Router';


export default function App() {
  return (
    <DriftContextProvider style={styles.container}>
      <Router />
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
