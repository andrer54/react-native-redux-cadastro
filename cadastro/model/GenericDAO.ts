import db from './DatabaseInstance';
 
 export abstract class GenericDAO<T,K>{
   protected abstract getCreateSQL(): string;
   protected abstract getTableName(): string;
   protected abstract getInsertSQL(): string;
   protected abstract getInsertParams(entidade: T): any[];
   protected abstract getUpdateSQL(): string;
   protected abstract getUpdateParams(entidade: T): any[];
   protected abstract getDeleteSQL(): string;
   protected abstract getSelectAllSQL(): string;
   protected abstract getSelectOneSQL(): string;
   protected abstract getEntidade(linha: any): T;
 
   public async incluir(entidade: T): Promise<void>{
     await db.transaction(txn => txn.executeSql(
       this.getInsertSQL(),this.getInsertParams(entidade)
     ));     
      
       
   }
   public async alterar(entidade: T): Promise<void>{
     await db.transaction(txn => txn.executeSql(
       this.getUpdateSQL(),this.getUpdateParams(entidade)
     )); 
   }
   public async excluir(chave: K): Promise<void>{
     await db.transaction(txn => txn.executeSql(
       this.getDeleteSQL(),[chave]
     )); 
   }
   public obterTodos(useRetorno:(colecao: T[])=>void):void{
     db.transaction((txn) =>
       txn.executeSql(this.getSelectAllSQL(),[],
                     (txn,results)=>{
         let retorno: T[] = [];
         for(let i = 0; i < results.rows.length; i++)
           retorno.push(
                   this.getEntidade(results.rows.item(i)));
         useRetorno(retorno);
       })
     )
   }
   public obter(chave: K, useRetorno:(entidade: T)=>void):void{
     db.transaction((txn) => txn.executeSql(
       this.getSelectOneSQL(),[chave],(txn,results)=>{
         let retorno: T = null;
         if(results.rows.length>0)
           retorno = this.getEntidade(results.rows.item(0));
         useRetorno(retorno);
       })
     )
   }
   constructor(){
     await db.transaction((txn)=>
       txn.executeSql(
         ' SELECT name FROM sqlite_master WHERE type='table' '+
         ' AND name = ? ',
         [this.getTableName()],(txn,results)=>{
           if(results.rows.length==0)
             db.transaction((txn)=>
                txn.executeSql(this.getCreateSQL(),[])
             );
         }));
   }    
 }