import db from './DatabaseInstance';
import { Aluno } from './Aluno';
 
 export default class AlunoDAO {
   public incluir(entidade: Aluno) {
     let criacao = new Date();
     let aluno = {matricula: entidade.matricula, 
                  nome: entidade.nome,
                  registro: criacao.getTime()} 
     db.write(() => db.create('Aluno', aluno));
   }
   public excluir(chave: string) {
     db.write(() => db.delete(
        db.objects('Aluno').filtered('matricula = $0',chave))
     );
   }
   private getAluno(entidade: any): Aluno{
     let criacao = new Date(entidade.registro); 
     return new Aluno(entidade.matricula, 
                      entidade.nome, criacao);
   }
   public obterTodos(): Aluno[] {
     let objetos = [];
     let objsRealm = db.objects('Aluno'); 
     if(objsRealm.length>0)
       for(let obj of objsRealm){
         let entidade =  JSON.parse(JSON.stringify(obj));
         objetos.push(this.getAluno(entidade));
       }
     return objetos;
   }
 }