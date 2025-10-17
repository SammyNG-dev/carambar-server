import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Joke = sequelize.define("Joke", {
  text: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

export default Joke