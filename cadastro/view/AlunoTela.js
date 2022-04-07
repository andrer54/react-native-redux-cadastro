import React, {useState, useEffect} from 'react';
 import {Text, View, TextInput, TouchableOpacity, FlatList} 
        from 'react-native';
 import {styles} from './CommonStyles';
 import AlunoItem from './AlunoItem';
 import {Aluno} from '../model/Aluno';
 import {actionCriarAluno, actionExcluirAluno, 
        actionObterAlunos} from '../action/AlunoActions';
 import {store} from '../store/AlunoStore';
 
 export default function AlunoTela( { navigation } ) {
   const [alunos,setAlunos] = useState([]);
   const [matricula,setMatricula] = useState('');
   const [nome,setNome] = useState('');
   const [listenerAdded,setListenerAdded] = useState(false);
   useEffect(() => {
     if(!listenerAdded){
       store.subscribe(()=>setAlunos(store.getState()));
       setListenerAdded(true);
       store.dispatch(actionObterAlunos());  
     }
   });
   
   const myKeyExtractor = item => {
     return item.matricula;
   };
 
   function excluirAluno(matriculaExc){
     store.dispatch(actionExcluirAluno(matriculaExc));
   }
 
   function adicionarAluno(){
     let alunoAux = new Aluno(matricula,nome,null);
     store.dispatch(actionCriarAluno(alunoAux));
     setMatricula('');
     setNome('');  
   }
 
   return (
     <View style={styles.container}>
       <TextInput style={styles.input} placeholder='Matricula'
         value={matricula} onChangeText={setMatricula} /> 
       <TextInput style={styles.input} placeholder='Nome' 
         value={nome} onChangeText={setNome}/> 
       <TouchableOpacity style={styles.button}
         onPress={adicionarAluno} > 
         <Text style={styles.buttonTextBig}>Salvar</Text> 
       </TouchableOpacity> 
       <FlatList data={alunos}
         contentContainerStyle={styles.itemsContainer}
         keyExtractor={myKeyExtractor}
         renderItem={({item}) => 
         <AlunoItem onDelete={()=>excluirAluno(item.matricula)}      
         aluno={item} />}
       />
     </View>
   );
 }