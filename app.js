import express from "express";
import { Produto } from "./models/Produtos.js";

const app = express();
const PORT = 3000;

// configura body parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/cadastro", (req, res) => {
  Produto.create({
    nome: req.body.nome,
    preco: req.body.preco,
    descricao: req.body.descricao,
  })
    .then(() => {
      res.send("Produto cadastrado com sucesso!");
    })
    .catch((err) => {
      console.log("Erro ao criar produto: " + err);
    });
});

app.listen(PORT, () => {
  console.log("Servidor esta rodando na porta: " + PORT);
});
