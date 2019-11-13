const mongoose = require('mongoose');

//import { Mongoose } from "mongoose"; //ESSE FOI AUTOMÁTICO PELO VSCODE, MAS É MELHOR NÃO USAR

const AlunasSchema = new mongoose.Schema({
    nome: { type: String },
    dateOfBirth: { type: Number },
    nasceuEmSp: { type: String }, //type: Boolean
    livros: [{ titulo: String, leu: String }] //leu: Boolean
});
//schema de alunas
//representação das características do objeto aluna, que será utilizado no model

//Ex. de tipos de valores: String (texto), Number (Numérico), Date (Data), Booleano (Boolean)

// const AlunasSchema = new mongoose.Schema({
//     nome: { type: String },
//     dateOfBirth: { type: String },
//     nasceuEmSp: { type: String },
//     livros: [{
//         titulo: String,
//         leu: String,
//     }]
// })

//exemplo de schema com campos obrigatórios
//var sampleSchema = new Schema({ name: { type: String, required: true } });

//PODE SER APENAS O MODULE.EXPORTS, A CONST FOI SÓ PARA ILUSTRAR O FLUXO 
const Alunas = mongoose.model('Alunas', AlunasSchema);
module.exports = Alunas;




