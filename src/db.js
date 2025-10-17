import { Sequelize } from "sequelize";

// SQLite => base locale

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./src/database.sqlite",
  logging: false,
});

export default sequelize;
