import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";



export default function App({navigation}) {
  return (
    <View style={styles.container}>
        <ImageBackground  source={require("../assets/BACK5.png")} resizeMode="cover" style={styles.image}>
      <View>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>

      <TouchableOpacity
        style={styles.button1}
        onPress={() => {
          navigation.navigate("Retour3");
        }}
      >
        <Text style={{color:"orange", fontSize:30}}>Se connecter</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button2}
        onPress={() => {
          navigation.navigate("Retour");
        }}
      >
        <Text style={{color:"orange", fontSize:30}}>S'inscrire</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    marginTop: 90,
    marginLeft: 90,
    width: 200,
    height: 200,
    resizeMode: "stretch",
    borderRadius: 100,
  },
  button1: {
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 70,
    padding: 10,
    borderColor: "orange",
    borderRadius: 40,
    borderWidth: 2,
  },
  button2: {
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 70,
    padding: 10,
    borderColor: "orange",
    borderRadius: 40,
    borderWidth: 2,
  },
  image:{
      height:844
  }
});
