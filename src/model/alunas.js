const mongoose = require('mongoose');

//import { Mongoose } from "mongoose"; //ESSE FOI AUTOMÁTICO PELO VSCODE, MAS É MELHOR NÃO USAR

const AlunasSchema = new mongoose.Schema({
    nome: { type: String },
    dateOfBirth: { type: Number },
    nasceuEmSp: { type: Boolean },
    livros: [{ titulo: String, leu: Boolean }]
});
