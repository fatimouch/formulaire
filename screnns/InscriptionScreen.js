import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";

const UselessTextInput = ({navigation}) => {
  const [text, onChangeText] = React.useState("");

  return (
    <SafeAreaView>
        <Text>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Entrer votre email"
      />
      <Text>mot de passe</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        secureTextEntry={true}
        value={text}
        placeholder="Entrer votre mot de passe"
 
      />
      <Text>Confirmation du mot de passe</Text>
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
        <Text style={{color:"orange", fontSize:30}}>Suivant</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default UselessTextInput;