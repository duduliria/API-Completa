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

app.get("/:nome", (req, res) => {
  Produto.findAll({ where: { nome: req.params.nome } })
    .then((produto) => {
      res.send(produto);
    })
    .catch((err) => {
      console.log("Produto nao existe na base de dados: " + err);
    });
});

app.patch("/atualizar/:id", (req, res) => {
  Produto.update(
    {
      nome: req.body.nome,
      preco: req.body.preco,
      descricao: req.body.descricao,
    },
    { where: { id: req.params.id } },
  )
    .then(() => {
      res.send("Atualizado com sucesso");
    })
    .catch((err) => {
      console.log("Erro ao atualizar os dados do produto: " + err);
    });
});

app.delete("/delete/:id", (req, res) => {
  Produto.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.send("Produto deletado com sucesso");
    })
    .catch((err) => {
      console.log("Erro ao deletar produto: " + err);
    });
});

app.get("/", (req, res) => {
  Produto.findAll()
    .then((produtos) => {
      res.send({ produtos: produtos });
    })
    .catch((err) => {
      console.log("Erro ao buscar produtos: " + err);
    });
});

app.listen(PORT, () => {
  console.log("Servidor esta rodando na porta: " + PORT);
});
