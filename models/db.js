import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("cadastro", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Banco de dados conectado com sucesso.");
  })
  .catch((error) => {
    console.log("Erro ao conectar ao banco: " + error);
  });
 