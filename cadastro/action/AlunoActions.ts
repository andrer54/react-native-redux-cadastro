import {Aluno} from '../model/Aluno';
 
 export const CRIAR_ALUNO   = 'CRIAR_ALUNO';
 export const EXCLUIR_ALUNO = 'EXCLUIR_ALUNO';
 export const OBTER_ALUNOS  = 'OBTER_ALUNOS';
 
 export const actionCriarAluno = (aluno: Aluno) => ({
   type: CRIAR_ALUNO,
   payload: {aluno}    
 })
 
 export const actionExcluirAluno = (matricula: string) => ({
   type: EXCLUIR_ALUNO,
   payload: {matricula}    
 })
 
 export const actionObterAlunos = () => ({
   type: OBTER_ALUNOS,
   payload: {}    
 })