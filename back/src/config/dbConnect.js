import mongoose from "mongoose";

mongoose.connect("mongodb+srv://DevYuri:Senha123@estudodev.k1sejjt.mongodb.net/Lista-Produtos");

let db = mongoose.connection;
 
export default  db;