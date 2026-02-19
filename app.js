const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Seja bem-vindo ao nosso site");
});

app.get("/artigos/:id/:data", (req, res) => {
  if (req.params.id === "1" && req.params.data === '19-02-2026') {
    res.send("1 - Como criar aplicativos android e IOs");
  } else if (req.params.id === "2") {
    res.send("2 - Como usar o nodeJs");
  } else {
    res.send("Nenhum artigo foi encontrado");
  }
});

app.get("/contato", (req, res) => {
  res.send("Deixe a sua mensagem");
});

app.listen(PORT, () => {
  console.log("Servidor esta rodando na porta: " + PORT);
});
