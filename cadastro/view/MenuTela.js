import React from 'react';
 import { Text, View, TouchableOpacity } from 'react-native';
 import { styles } from './CommonStyles';
 
 export default function MenuTela( { navigation } ){
   return (
     <View style={styles.container}>
       <TouchableOpacity style={styles.button}
             onPress={()=>navigation.navigate('AlunoTela')}> 
         <Text style={styles.buttonTextBig}>Alunos</Text> 
       </TouchableOpacity> 
     </View>
   );
 }