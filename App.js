import {NavigationContainer} from '@react-navigation/native';
 import {createStackNavigator} from '@react-navigation/stack';
 import React from 'react';
 import AlunoTela from './cadastro/view/AlunoTela';
 import MenuTela from './cadastro/view/MenuTela';
 
 const Stack = createStackNavigator();
 
 export default function App() {
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName='MenuTela'>
         <Stack.Screen name='MenuTela' 
          options={{title: 'Menu Principal'}} 
          component={MenuTela} />
         <Stack.Screen name='AlunoTela' 
          options={{title: 'Listagem de Alunos'}} 
          component={AlunoTela} />
       </Stack.Navigator>
     </NavigationContainer>
   );
 }