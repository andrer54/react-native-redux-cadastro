import {CRIAR_ALUNO, EXCLUIR_ALUNO, OBTER_ALUNOS} 
        from '../action/AlunoActions';
 import AlunoDAO from '../model/AlunoDAO';
 
 const dao: AlunoDAO = new AlunoDAO();
 
 export const reducer = (state = [], 
              action: {type: string, payload: any}) => {
   switch(action.type) {
     case CRIAR_ALUNO:
       dao.incluir(action.payload.aluno);
       state = dao.obterTodos();
       break;
     case EXCLUIR_ALUNO:
       dao.excluir(action.payload.matricula);
       state = dao.obterTodos();
       break;  
     case OBTER_ALUNOS:
       state = dao.obterTodos();
       break;
     default:
   }
   return state;
 }