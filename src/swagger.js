import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Blagues Carambar",
      version: "1.0.0",
      description:
        "Une API simple pour consulter et ajouter des blagues Carambar.",
    },
    servers: [
      {
        url: "https://carambar-server.onrender.com",
      },
    ],
  },
  apis: ["./src/router.js"], // fichier(s) où Swagger ira lire les commentaires
};

const swaggerSpec = swaggerJsdoc(options);

export const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
