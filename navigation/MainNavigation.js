import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

import HomeScreen from '../screnns/HomeScreen';
import InscripScreen from '../screnns/InscripScreen';
import InscriptionScreen from '../screnns/InscriptionScreen';
import LoginScreen from '../screnns/LoginScreen';
// import SuccessScreen from '../screnns/SuccessScreen';

export default function MainNavigation() {
  return (
      <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen name="Home" component={HomeScreen} screenOptions={{ headerShown: false}} />
      <Stack.Screen name="Retour" component={InscriptionScreen} />
      <Stack.Screen name="Retour2" component={InscripScreen} />
      <Stack.Screen name="Retour3" component={LoginScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};