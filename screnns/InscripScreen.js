import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { View } from "react-native-web";

const InscripScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <label>Email</label>
        <input
          type="texte"
          id="email"
          name="email"
          placeholder="Entrez votre email"
        />
        <label>Mot de passe</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Entrez votre mot de passe"
        />
      </View>
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

export default InscripScreen;
