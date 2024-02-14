import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
//import * as ImagePicker from 'expo-image-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const UploadImage = () => {

    const [image, setImage] = useState();
    
    const uploadImage = async () => {
        try {
            await ImagePicker.requestCameraPermissionsAsync(); 
            let result = await ImagePicker.launchCameraAsync({
                cameraType: ImagePicker.CameraType.Front,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });
            if (!result.canceled) {
                await saveImage(result.assets[0].uri);
            }
        } catch (error) {
            Alert('Error uploading image: ' + error.message)
        }
           
    };

    const saveImage = async (image) => {
        try {
            setImage(image);
            setModalVisible(false);
        } catch (error) {
            throw error;
        }
    }

    return (
        <View style={styles.appContainer}>
        <View>
            {/* <VehicleDetails /> */}
            {/* <Vehicle /> */}
            {/* <RegistrationSuccess /> */}
        </View>
        </View>
    );
};

export default UploadImage;