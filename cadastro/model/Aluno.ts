export class Aluno{
    matricula: string;
    nome: string;
    registro: Date;
    constructor(matricula: string,nome: string,registro: Date){
        this.matricula = matricula;
        this.nome = nome;
        this.registro = registro;
    }
}