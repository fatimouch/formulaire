import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, View, Image, TouchableOpacity, ImageBackground  } from "react-native";

const InscripScreen = ({navigation}) => {
 

  return (
    <SafeAreaView>
      <View style={styles.row1}>
          <Text style={styles.titleP}>Hello</Text>
        <Image style={styles.logo} source={require("../assets/logo.png")} />

      </View>
        <Text style={styles.title1}>Email</Text>
      <TextInput
        style={styles.input}
        
    
        placeholder="Entrer votre email"
      />
      <Text style={styles.title1}>mot de passe</Text>
      <TextInput
        style={styles.input}
       
        secureTextEntry={true}
        placeholder="Entrer votre mot de passe"
 
      />
      <Text style={styles.title1}>Confirmation mot de passe</Text>
      <TextInput
        style={styles.input}
        
        secureTextEntry={true}
        placeholder="Entrer votre mot de passe"
        />
        <TouchableOpacity
        style={styles.button2}
        onPress={() => {
          navigation.navigate("Retour2");
        }}
      >
        <Text style={{color:"orange", fontSize:30}}>Suivant</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    padding: 20,
    margin: 12,
    borderWidth: 2,
    borderColor:"orange",
    borderRadius:15,
    color:"orange",
  },
  image:{
    height:844
},
title1:{
  fontSize: 30,
  marginTop: 20,
  color:"orange",
  marginLeft: 20,
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
logo: {
  marginTop: 20,
  marginRight: 28,
  width: 100,
  height: 100,
  resizeMode: "stretch",
  borderRadius: 100,
  borderColor:"gold",
  borderWidth: 2,
},
titleP:{
  fontFamily: "cursive",
  fontSize: 70,
  color: "orange",
},
row1:{
  flexDirection:"row",
  justifyContent:"space-between",
  marginTop: 40,
  marginLeft:10,
  },
});

export default InscripScreen;