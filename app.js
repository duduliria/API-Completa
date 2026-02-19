const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Seja bem-vindo ao nosso site");
});

app.get("/artigos", (req, res) => {
  res.send('Todos os artigos')
});

app.get("/contato", (req, res) => {
  res.send("Deixe a sua mensagem");
});

app.listen(PORT, () => {
  console.log("Servidor esta rodando na porta: " + PORT);
});
