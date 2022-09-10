import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home'
import Cadastro from './components/Cadastro'
import Pesquisar from './components/Pesquisar'
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden/>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="O que deseja fazer ?" component={Home} />
        <Stack.Screen name="Cadastro de novo perfil" component={Cadastro} />
        <Stack.Screen name="Informe a placa do veículo" component={Pesquisar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const screenOptions ={
  headerStyle:{
    backgroundColor: '#000209',
  },

  headerTintColor: '#fff',
  headerTitleStyle:{
    fontWeigth: 'bold',
    fontSize: 20
  }
}