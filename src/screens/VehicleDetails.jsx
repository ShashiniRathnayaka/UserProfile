import { View, StyleSheet, Text, ImageBackground, TextInput, Button, Alert, TouchableOpacity, PermissionsAndroid} from 'react-native'
import React, { useState } from 'react'
import VectorIcon from '../utils/VectorIcons';
import MyButton from '../components/MyButton';
import placeholder from '../assets/vehicleDetails.jpeg';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const VehicleDetails = ({}) => {

    const [vehicleName, setVehicleName] = useState('');
    const [type, setType] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');

    const [cameraPhoto, setCameraPhoto] = useState('');

    const handleInputChange = (value, inputField) => {
        switch (inputField) {
            case 'vehicleName':
                setVehicleName(value);
                break;
            case 'type':
                setType(value);
                break;
            case 'make':
                setMake(value);
                break;
            case 'model':
                setModel(value);
                break;
            case 'year':
                setYear(value);
                break;
            default:
                break;
        }
    };

    let options = {
        saveToPhotos: true,
        mediaType: 'photo',
        editing: true,
        allowsEditing: true,
    };

    const openCamera = async () => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            const result = await launchCamera(options);
            setCameraPhoto(result.assets[0].uri);
        }
    };

    // const [date, setDate] = useState(new Date());
    // const [showDatePicker, setShowDatePicker] = useState(false);

    // const handleDateChange = (event, selectedDate) => {
    //     const currentDate = selectedDate || date;
    //     setShowDatePicker(true);
    //     setDate(currentDate);
    //   };
    
    //   const handleIconPress = () => {
    //     setShowDatePicker(true);
    //   };
    
    //   const handleTextInputPress = () => {
    //     setShowDatePicker(true);
    //   };
    
    //   const handleDateSubmit = () => {
    //     // Do something with the selected date
    //     console.log('Selected date:', date);
    //     // Close the date picker
    //     setShowDatePicker(false);
    //   };
  
    // const handleSubmit = () => {
    //   Alert.alert('Input Value', text);
    //   // You can perform any action with the input value here, like submitting it to a server, etc.
    // };

    return (
        <View>
            <View style={styles.header}>
                <VectorIcon type='AntDesign' name='arrowleft' color='#000000' size={30} style={styles.iconStyle} />
                <Text style={styles.textStyle}>Vehicle details</Text>
            </View>

            <View style={styles.vehiclePic} >
                <ImageBackground
                    //source={{ uri: cameraPhoto }}
                    source={cameraPhoto ? { uri: cameraPhoto } : placeholder}
                >
                    <TouchableOpacity onPress={openCamera}>
                        <VectorIcon type='Feather' name='upload' size={28} color="black" style={styles.uploadIconStyle}  />
                    </TouchableOpacity>
                </ImageBackground>

                {/* <Image
                    source={{ uri }}
                    style={[
                        styles.image,
                    ]}
                />
                <TouchableOpacity onPress={onButtonPress}>
                    <VectorIcon type='Feather' name='upload' size={28} color="black" style={styles.uploadIconStyle} onPress={() => uploadImage} />
                </TouchableOpacity> */}


            </View>

            <View style={styles.container}>
                <View>
                    <TextInput
                        style={styles.input1}
                        placeholder="Vehicle Name"
                        placeholderTextColor={"gray"}
                        onChangeText={(value) => handleInputChange(value, 'vehicleName')}
                        value={vehicleName}
                    />
                </View>

                <View style={styles.type}>
                    <View style={styles.dropDown}>
                        <TextInput
                            style={styles.input}
                            placeholder="Type"
                            placeholderTextColor={"gray"}
                            onChangeText={(value) => handleInputChange(value, 'type')}
                            value={type}
                        />
                        <VectorIcon type="Feather" name="chevron-down" size={25} color="gray" style={styles.iconContainer} />
                    </View>

                    <View style={styles.dropDown}>
                        <TextInput
                            style={styles.input}
                            placeholder="Make"
                            placeholderTextColor={"gray"}
                            onChangeText={(value) => handleInputChange(value, 'make')}
                            value={make}
                        />
                        <VectorIcon type="Feather" name="chevron-down" size={25} color="gray" style={styles.iconContainer} />
                    </View>
                </View>

                <View style={styles.type}>
                    <View style={styles.dropDown}>
                        <TextInput
                            style={styles.input}
                            placeholder="Model"
                            placeholderTextColor={"gray"}
                            onChangeText={(value) => handleInputChange(value, 'model')}
                            value={model}
                        />
                        <VectorIcon type="Feather" name="chevron-down" size={25} color="gray" style={styles.iconContainer} />
                    </View>

                    <View style={styles.dropDown}>
                        <TextInput
                            style={styles.input}
                            placeholder="Year"
                            placeholderTextColor={"gray"}
                            onChangeText={(value) => handleInputChange(value, 'year')}
                            value={year}
                        />
                    </View>
                </View>

                <View style={styles.line} />

                <View>

                    <Text style={styles.text}>License renewal date</Text>
                    <TouchableOpacity > 
                        <View style={styles.licenceDate}>
                            <TextInput
                                //style={styles.input3}
                                placeholder='DD/MM/YYYY'
                                placeholderTextColor={"gray"}
                            // value={date.toDateString()} // Display selected date in the input field
                                editable={false} // Disable editing of the input field
                            />
                            <VectorIcon type="FontAwesome" name="calendar-o" size={25} color="#FF5C01" style={styles.iconContainer} />
                        </View>
                    </TouchableOpacity>
                    {/* <TouchableOpacity onPress={handleIconPress} style={styles.iconContainer}>
                        <VectorIcon type="FontAwesome" name="calendar-o" size={30} color="#FF5C01" />
                    </TouchableOpacity> */}
                    {/* {showDatePicker && (
                        <DateTimePicker
                        value={date}
                        mode="date"
                        display="default"
                        onChange={handleDateChange}
                        />
                    )} */}

                    <Text style={styles.text}>Vehicle insurance renewal date</Text>
                    <TouchableOpacity > 
                        <View style={styles.licenceDate}>
                            <TextInput
                                //style={styles.input3}
                                placeholder='DD/MM/YYYY'
                                placeholderTextColor={"gray"}
                            // value={date.toDateString()} // Display selected date in the input field
                                editable={false} // Disable editing of the input field
                            />
                            <VectorIcon type="FontAwesome" name="calendar-o" size={25} color="#FF5C01" style={styles.iconContainer} />
                        </View>
                    </TouchableOpacity>

                </View>

                <View style={styles.buttons}>
                    <MyButton title={'Skip'} onPress={undefined} style={undefined} />
                    <MyButton title={'Next'} onPress={undefined} style={styles.next} />
                </View>

            </View>

        </View>
     )
}

const styles = StyleSheet.create({
    iconStyle: {
        marginTop: 9
    },
    textStyle: {
        fontSize: 28,
        color: '#FF5C01',
        marginTop: 3,
        marginRight:110
    },
    header: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-between'
    },
    vehiclePic: {
        width: '50%',
        marginHorizontal: '25%',
        marginBottom: 10,
        height: 150
    },
    uploadIconStyle: {
        paddingTop: '60%',
        paddingLeft: '85%',
        position: 'relative',
        // bottom: 0,
        // right: 0,
    },
    container: {
        width: '80%',
        marginHorizontal: '10%',
        marginTop: 10
    },
    input1: {
        fontSize: 16,
        marginBottom: 10,
        width: '100%',
        backgroundColor: '#FAFAFA',
        borderRadius: 10,
        color: 'black'
    },
    type: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    input: {
        fontSize: 16,
    },
    line: {
        height: 1,
        backgroundColor: 'black',
        opacity: 0.69,
        marginVertical: 10, 
    },
    iconContainer: {
        padding: 10,
    },
    licenceDate: {
        flexDirection: 'row',
        backgroundColor: '#FAFAFA',
        width: '100%',
        marginBottom: 10,
        justifyContent: 'space-between',
        borderRadius: 10
    },
    text: {
        fontSize: 16,
        color: 'black'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    next: {
        opacity: 0.8 ,
    },
    dropDown: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FAFAFA',
        width: '48%',
        borderRadius: 10,
        marginBottom: 10
    },
    image: {
        height: '50%',
        //height: 'auto'
    }
});

export default VehicleDetails