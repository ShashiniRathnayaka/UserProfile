import React from "react";
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

function LoginField() {
  return (
    <View style={{ marginTop: 20 }}>
      <View style={{ flexDirection: "row" }}>
        <TextInput style={{
          letterSpacing: 1.6,
          textTransform: "capitalize",
          borderRadius: 10,
          backgroundColor: "#fafafa",
          alignSelf: "center",
          width: 180,
          maxWidth: "100%",
          alignItems: "flex-start",
          marginTop: 20,
          paddingVertical: 10,
          paddingHorizontal: 40,
          fontSize: 16,
          fontWeight: "normal",
          marginLeft: 20
        }}
          placeholder='First Name'
          placeholderTextColor={"rgba(0, 0, 0, 0.50)"}
        />
        <TextInput style={{
          letterSpacing: 1.6,
          textTransform: "capitalize",
   //       mixBlendMode: "hard-light",
          borderRadius: 10,
          backgroundColor: "#fafafa",
          alignSelf: "center",
          width: 180,
          maxWidth: "100%",
          marginLeft: 10,
          marginTop: 20,
          paddingVertical: 10,
          paddingHorizontal: 40,
          fontSize: 16,
          fontWeight: "normal",
        }}
          placeholder='Last Name'
          placeholderTextColor={"rgba(0, 0, 0, 0.50)"}
        />
      </View>
      <TextInput style={{
        letterSpacing: 1.6,
        borderRadius: 10,
        backgroundColor: "#fafafa",
        alignSelf: "center",
        width: 370,
        maxWidth: "100%",
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        fontWeight: "normal",
      }}
        placeholder='Password'
        placeholderTextColor={"rgba(0, 0, 0, 0.50)"}
      />
      <TextInput style={{
        letterSpacing: 1.6,
        borderRadius: 10,
        backgroundColor: "#fafafa",
        alignSelf: "center",
        width: 370,
        maxWidth: "100%",
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        fontWeight: "normal",
      }}
        placeholder='Email'
        placeholderTextColor={"rgba(0, 0, 0, 0.50)"}
      />
      <View style={{ flexDirection: "row" }}>
        <TextInput style={{
          letterSpacing: 1.6,
          borderRadius: 10,
          backgroundColor: "#fafafa",
          alignSelf: "center",
          width: 370,
          maxWidth: "100%",
          marginTop: 10,
          paddingVertical: 10,
          paddingHorizontal: 20,
          fontSize: 16,
          fontWeight: "normal",
        }}
          placeholder='   +94'
          placeholderTextColor={"rgba(0, 0, 0, 0.50)"}
        />
      </View>
      <View style={{ flexDirection: "row", }}>
        <TextInput style={{
          letterSpacing: 1.6,
          textTransform: "capitalize",
         // mixBlendMode: "hard-light",
          borderRadius: 10,
          backgroundColor: "#fafafa",
          alignSelf: "center",
          width: 180,
          maxWidth: "100%",
          alignItems: "flex-start",
          marginTop: 10,
          paddingVertical: 10,
          paddingHorizontal: 40,
          fontSize: 16,
          fontWeight: "normal",
          marginLeft: 20
        }}
          placeholder='Province'
          placeholderTextColor={"rgba(0, 0, 0, 0.50)"}
        />
        <TextInput style={{
          letterSpacing: 1.6,
          textTransform: "capitalize",
          //mixBlendMode: "hard-light",
          borderRadius: 10,
          backgroundColor: "#fafafa",
          //alignSelf: "right",
          width: 180,
          maxWidth: "100%",
          marginLeft: 10,
          marginTop: 10,
          paddingVertical: 10,
          paddingHorizontal: 40,
          fontSize: 16,
          fontWeight: "normal",
        }}
          placeholder='District'
          placeholderTextColor={"rgba(0, 0, 0, 0.50)"}
        />
      </View>
    </View>
  );
};

function App(): JSX.Element {
  return (
    <KeyboardAwareScrollView 
      style={{ backgroundColor: '#ffffff', flex: 1, width: '100%' }}
      
    >
      <Text style={{
        color: "#FF5C01",
        fontFamily: "Poppins",
        fontSize: 28,
        fontWeight: "800",
        marginTop: 4,
        marginBottom: 20,
        marginLeft: 60,
      }}>Fill Your Profile</Text>

      <Image
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/6ec1db524bc522f36afaccbb76ecd51e9949838bdd6fb0018e9568b24c982a51?apiKey=5dd3414ba47141d0a3551d88348ee0c8&" }}
        style={{
          overflow: "hidden",
          alignSelf: "center",
          position: "relative",
          display: "flex",
          marginTop: 8,
          width: 110,
          flexDirection: "column",
          aspectRatio: 1,
         // mixBlendMode: "soft-light",
        }}
      />

      <LoginField />

      <TouchableOpacity style={styles.button}>
        <Text style={{
          fontFamily: "Poppins",
          color: "#FAFAFA",
        }}>
          Login
        </Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{
          color: "#000",
          fontFamily: "Poppins",
          fontSize: 17,
          marginLeft: 30,
          marginTop: 30,
        }}>Already have an account ?</Text>
        <Text style={{
          color: "#FF5C01",
          fontFamily: "Poppins",
          fontSize: 17,
          marginLeft: 5,
          marginTop: 30,
        }}>Login</Text>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(255, 92, 1, 0.80)",
    alignSelf: "center",
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 20,
  },
});

export default App;