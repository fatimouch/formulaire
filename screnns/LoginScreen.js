import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Image, Text, TouchableOpacity, View } from "react-native";

const LoginScreen = ({navigation}) => {
  const [text, onChangeText] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.row1}>
          <Text style={styles.titleP}>Hello</Text>
        <Image style={styles.logo} source={require("../assets/logo.png")} />

      </View>
        <Text style={styles.title1}>Email</Text>
      <TextInput
      onChangeText={onChangeText}
        style={styles.input}
       
        keyboardType="email-address"
        
        placeholder="Entrer votre email"
      />
      <Text style={styles.title}>mot de passe</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        secureTextEntry={true}
        placeholder="Entrer votre mot de passe"
      />
        <TouchableOpacity
        style={styles.button2}
        onPress={() => {
          navigation.navigate("");
        }}
      >
        <Text style={{color:"orange", fontSize:30}}>Se connecter</Text>
      </TouchableOpacity>
      <View style={styles.row}>
      <Text> Pas encore inscrit?</Text>
      <Text style={{color: 'orange'}}
      onPress={() => navigation.navigate("Retour2")}>Créer un compte</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(90, 25, 25)',
      },
      row:{
          justifyContent:"center",
          marginTop:29,
          flexDirection: "row"
      },
  input: {
    height: 40,
    padding: 20,
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
titleP:{
  fontFamily: "cursive",
  fontSize: 70,
  color: "orange",
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
row1:{
flexDirection:"row",
justifyContent:"space-between",
marginTop: 40,
marginLeft:10,
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
});

export default LoginScreen;