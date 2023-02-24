import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
    id: { type: String },
    produto: { type: String, required: true },
    quantidade: { type: String, required: true }
    }
);

const produtos = mongoose.model('Produtos', produtoSchema);

export default produtos