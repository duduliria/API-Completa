import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";

const Produto = sequelize.define("produtos", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false, // nao pode ser nulo
  },
  preco: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

// criar registro
Produto.create({
  nome: "RTX 4060",
  preco: 3200.0,
  descricao: "Placa de video da marca NVidia.",
});
// Forcar a criacao
Produto.sync({ force: false });
