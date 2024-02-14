import { Text, View, StyleSheet, ImageBackground, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import VectorIcon from '../utils/VectorIcons';
import MyButton from '../components/MyButton';

const Vehicle = () => {

    const [mileage, setmileage] = useState('');
    const [distancePerWeek, setdistancePerWeek] = useState('');
    const [lastServiceDate, setlastServiceDate] = useState('');
    const [batteryCondition, setbatteryCondition] = useState('');

    const handleInputChange = (value, inputField) => {
        switch (inputField) {
            case 'mileage':
                setmileage(value);
                break;
            case 'distancePerWeek':
                setdistancePerWeek(value);
                break;
            case 'lastServiceDate':
                setlastServiceDate(value);
                break;
            case 'batteryCondition':
                setbatteryCondition(value);
                break;
            default:
                break;
        }
    };

    return (
        <View>
        
            <View style={styles.header}>
                <VectorIcon type='AntDesign' name='arrowleft' color='#000000' size={30} style={styles.iconStyle} />
                <Text style={styles.textStyle}>Vehicle details</Text>
            </View>

            <View style={styles.vehiclePic}>
                <ImageBackground
                    source={require('../assets/vehicleDetails.jpeg')}
                >
                    <VectorIcon type='Feather' name='upload' size={28} color="black" style={styles.uploadIconStyle} />
                </ImageBackground>
            </View>

            <View style={styles.container}>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Mileage"
                        placeholderTextColor={"gray"}
                        onChangeText={(value) => handleInputChange(value, 'mileage')}
                        value={mileage}
                    />
                </View>

                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Avg distance per week"
                        placeholderTextColor={"gray"}
                        onChangeText={(value) => handleInputChange(value, 'distancePerWeek')}
                        value={distancePerWeek}
                    />
                </View>

                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Last Service date"
                        placeholderTextColor={"gray"}
                        onChangeText={(value) => handleInputChange(value, 'lastServiceDate')}
                        value={lastServiceDate}
                    />
                </View>

                <View style={styles.container2}>
                    <TextInput
                        style={styles.input1}
                        placeholder="Battery Condition"
                        placeholderTextColor={"gray"}
                        onChangeText={(value) => handleInputChange(value, 'batteryCondition')}
                        value={batteryCondition}
                    />
                    <VectorIcon type="Feather" name="chevron-down" size={25} color="gray" style={styles.iconContainer} />
                </View>

                <TouchableOpacity>
                    <Text 
                        style={[styles.buttonText, { color: '#FF5C01'}]} 
                        onPress={undefined} 
                    >{'+ Add Another Vehicle'}</Text>
                </TouchableOpacity>

                <View style={styles.buttons}>
                    <MyButton title={'Back'} onPress={undefined} style={undefined} />
                    <MyButton title={'Register'} onPress={undefined} style={undefined} />
                </View>
            </View>

        </View>

    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        margin: 10,
        marginBottom: 20,
        justifyContent: 'space-between'
    },
    iconStyle: {
        marginTop: 9
    },
    textStyle: {
        fontSize: 28,
        color: '#FF5C01',
        marginTop: 3,
        marginRight:110
    },
    vehiclePic: {
        width: '50%',
        marginHorizontal: '25%',
        marginBottom: 10,
        height: 150
    },
    uploadIconStyle: {
        paddingTop: '69%',
        paddingLeft: '85%'
    },
    container: {
        width: '80%',
        marginHorizontal: '10%',
        marginTop: 20
    },
    input: {
        fontSize: 16,
        marginBottom: 10,
        width: '100%',
        backgroundColor: '#FAFAFA',
        borderRadius: 10,
        color: 'black'
    },
    iconContainer: {
        padding: 10,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#FAFAFA',
        borderRadius: 10,
        marginBottom: 10,
    },
    input1: {
        fontSize: 16,
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
        //padding: 10
        margin: 30
    },
})

export default Vehicle;