import {sqlite} from 'sqlite';

const db = new database(./database);

const Alunos_SCHEMA = `CREATE TABLE IF NOT EXISTS ALUNOS(
    id_Aluno primary key INT NOT NULL,
    nome (varchar 50),
    email(varchar 30) NOT NULL,
    celular INTERGER
    ocupacao varchar (20),
    bairro VARCHAR (30),
)`
function criarTabelaAll(){
    db.run(Alunos_SCHEMA, error =>{
        if (error) console.log("Mioiuuu!")
    })
}db.serialize(()=>{
    criarTabelaAl();
    criarTabelaFunc();
});