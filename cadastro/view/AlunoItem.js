import React from 'react';
 import { Text, View, TouchableOpacity } from 'react-native';
 import { styles } from './CommonStyles';
 
 export default function AlunoItem(props){
   const fillZero = (num) => { return ((num<10) ? '0':'')+num; }
   const getStrDate = (data) => {
     return fillZero(data.getDate())+'/'+
            fillZero(data.getMonth()+1)+'/'+data.getFullYear();
   }
   return (
     <View style={styles.container} id={props.aluno.matricula}>
       <Text style={styles.textItem}>
         {props.aluno.matricula} - {props.aluno.nome}</Text>
       <Text style={styles.textItem}>
         Criação: {getStrDate(props.aluno.registro)}</Text>
       <View style={styles.buttonsContainer}>
         <TouchableOpacity style={styles.deleteButton} 
                           onPress={props.onDelete}> 
           <Text style={styles.buttonText}>X</Text> 
         </TouchableOpacity> 
       </View>
     </View>
   );
 }