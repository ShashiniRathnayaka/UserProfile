import { Text, View, StyleSheet} from 'react-native';
import React from 'react';
import VectorIcon from '../utils/VectorIcons';

const RegistrationSuccess = () => {
  return (
    <View style={styles.container}>
        <VectorIcon type='Octicons' name='check-circle-fill' color='#FF5C01' size={100} />
        <Text style={styles.text}>Registration Success</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '65%',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF5C01',
        marginTop: 20,
    },
  });

export default RegistrationSuccess;