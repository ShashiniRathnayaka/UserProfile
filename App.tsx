import { Text, View, StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import VehicleDetails from './src/screens/VehicleDetails';
import Vehicle from './src/screens/Vehicle';
import RegistrationSuccess from './src/screens/RegistraionSuccess';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff', // Set to a light color, for example, white
  },
});

const App = () => {
  return (
    <View style={styles.appContainer}>
      <View>
        <VehicleDetails />
        {/* <Vehicle /> */}
        {/* <RegistrationSuccess /> */}
      </View>
    </View>
  );
};

export default App;