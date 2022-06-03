import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Image,  Text, TouchableOpacity } from "react-native";
import { ImageBackground } from "react-native-web";

const InscripScreen = ({navigation}) => {
  const [text, onChangeText] = React.useState("");
  return (
    <SafeAreaView style={styles.container}>

        <View style={styles.row1}>
          <Text style={styles.titleP}>Hello</Text>
        <Image style={styles.logo} source={require("../assets/logo.png")} />

      </View>
        <Text style={styles.title1}>Civilité</Text>
      <TextInput
      onChangeText={onChangeText}
        style={styles.input}
  
        placeholder="Entrez votre civilité"
      />
      <Text style={styles.title}>Prénom</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
      
        secureTextEntry={true}
        placeholder="Entrez votre prénom"
      />
      <Text style={styles.title}>Nom</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
      
        secureTextEntry={true}
        placeholder="Entrez votre nom"
      />
      <Text style={styles.title}>Date de naissance</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        
        secureTextEntry={true}
        placeholder="Entrez votre date de naissance"
      />
        <TouchableOpacity
        style={styles.button2}
        onPress={() => {
          navigation.navigate("Success");
        }}
      >
        <Text style={{color:"orange", fontSize:30}}>Terminé</Text>
      </TouchableOpacity>

     </SafeAreaView>
  );
};
export default InscripScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(68, 26, 26)',
      },
  input: {
    height: 40,
    padding: 20,
    margin: 12,
    borderWidth: 2,
    borderColor:"orange",
    borderRadius:15,
    color:"orange",
  },
  button2: {
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 70,
    padding: 8,
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
    marginTop: 0,
    color:"orange",
    marginLeft: 40,
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

