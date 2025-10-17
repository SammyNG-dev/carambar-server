import app from "./app.js";
import sequelize from "./db.js";
import { swaggerDocs } from "./swagger.js";

swaggerDocs(app);

const PORT = process.env.PORT || 3310;


try {
  await sequelize.sync();
  console.log("Base de donnée connectée.");
  app.listen(PORT, () => {
    console.log(`Le serveur écoute sur le port ${PORT}`);

  });
} catch (error) {
  console.error("Erreur de connexion à la base de donnée : ", error);
}
