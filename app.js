import express from "express";
import { Produto } from "./models/Produtos.js";

const app = express();
const PORT = 3000;

// configura body parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/cadastro", (req, res) => {
  const { nome, preco, descricao } = req.body;

  if (!nome || !preco || !descricao) {
    return res.status(400).json({ erro: "Dados obrigatórios não enviados" });
  }

  Produto.create({ nome, preco, descricao })
    .then((produto) => {
      res.status(201).json({
        mensagem: "Produto cadastrado com sucesso",
        produto,
      });
    })
    .catch((err) => {
      res.status(500).json({ erro: "Erro ao criar produto" });
    });
});

app.get("/:nome", (req, res) => {
  Produto.findAll({ where: { nome: req.params.nome } })
    .then((produto) => {
      if (produto.length === 0) {
        return res.status(404).json({ erro: "Produto não encontrado" });
      }

      res.status(200).json(produto);
    })
    .catch(() => {
      res.status(500).json({ erro: "Erro ao buscar produto" });
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
    .then(([linhasAfetadas]) => {
      if (linhasAfetadas === 0) {
        return res.status(404).json({ erro: "Produto não encontrado" });
      }

      res.status(200).json({ mensagem: "Atualizado com sucesso" });
    })
    .catch(() => {
      res.status(500).json({ erro: "Erro ao atualizar produto" });
    });
});

app.delete("/delete/:id", (req, res) => {
  Produto.destroy({ where: { id: req.params.id } })
    .then((linhasAfetadas) => {
      if (linhasAfetadas === 0) {
        return res.status(404).json({ erro: "Produto não encontrado" });
      }

      res.status(204).send();
    })
    .catch(() => {
      res.status(500).json({ erro: "Erro ao deletar produto" });
    });
});

app.get("/", (req, res) => {
  Produto.findAll()
    .then((produtos) => {
      res.status(200).json({ produtos });
    })
    .catch(() => {
      res.status(500).json({ erro: "Erro ao buscar produtos" });
    });
});

app.listen(PORT, () => {
  console.log("Servidor esta rodando na porta: " + PORT);
});
