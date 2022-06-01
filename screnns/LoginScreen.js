import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";
import { ImageBackground } from "react-native-web";

const LoginScreen = ({navigation}) => {
  const [text, onChangeText] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground   source={require("../assets/BACK5.png")} resizeMode="cover" style={styles.image}>
        <Text style={styles.title1}>Email</Text>
      <TextInput
      onChangeText={onChangeText}
        style={styles.input}
        value={text}
        placeholder="Entrer votre email"
      />
      <Text style={styles.title}>mot de passe</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        secureTextEntry={true}
        placeholder="Entrer votre mot de passe"
 
      />
        <TouchableOpacity
        style={styles.button2}
        onPress={() => {
          navigation.navigate("Retour2");
        }}
      >
        <Text style={{color:"orange", fontSize:30}}>Se connecter</Text>
      </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(68, 26, 26)',
      },
  input: {
    height: 40,
    padding: 10,
    margin: 12,
    borderWidth: 2,
    borderColor:"orange",
    borderRadius:15,
    padding: 10,
    color:"orange",
  },
  button2: {
    alignItems: "center",
    marginTop: 50,
    marginHorizontal: 70,
    padding: 10,
    borderColor: "orange",
    borderRadius: 40,
    borderWidth: 2,
  },
  image:{
    height:844
},
title:{
    color:"orange",
    fontSize: 30,
    marginLeft: 40,
},
title1:{
    fontSize: 30,
    marginTop: 40,
    color:"orange",
    marginLeft: 40,
},
});

export default LoginScreen;