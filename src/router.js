import express from "express";
import Joke from "./models/Joke.js";
/**
 * @swagger
 * components:
 *   schemas:
 *     Joke:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         text:
 *           type: string
 *       example:
 *         id: 1
 *         text: "Pourquoi les plongeurs plongent-ils toujours en arrière ? Parce que sinon ils tombent dans le bateau."
 *     JokeInput:
 *       type: object
 *       properties:
 *         text:
 *           type: string
 *       required:
 *         - text
 *       example:
 *         text: "Pourquoi les carambars sont-ils drôles ? Parce qu'ils ont du sucre dans les veines."
 */

const router = express.Router();

/**
 * @swagger
 * /api/new-joke:
 *   post:
 *     summary: Ajoute une nouvelle blague
 *     description: Permet d'ajouter une ou des blagues à la base de données.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/JokeInput'
 *     responses:
 *       201:
 *         description: Blague ajoutée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       400:
 *         description: Requête invalide
 */

router.post("/api/new-joke", async (req, res, next) => {
  const data = req.body;
  try {
    if (Array.isArray(data)) {
      const newJokes = await Joke.bulkCreate(data);
      res.status(201).json({
        message: `${newJokes.length} blagues ajoutées avec succès`,
        newJokes,
      });
    } else {
      const newJoke = await Joke.create(data);
      res
        .status(201)
        .json({ message: "Blague ajoutée avec succès !", newJoke });
    }
  } catch (err) {
    next(err);
  }
});

/**
 * @swagger
 * /api/jokes:
 *   get:
 *     summary: Récupère toutes les blagues
 *     description: Retourne la liste complète des blagues enregistrées.
 *     responses:
 *       200:
 *         description: Liste de blagues
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Joke'
 */
router.get("/api/jokes", async (_req, res, next) => {
  try {
    const jokes = await Joke.findAll();
    res.status(200).json(jokes);
  } catch (err) {
    next(err);
  }
});

/**
 * @swagger
 * /api/joke/{id}:
 *   get:
 *     summary: Récupère une blague par son ID
 *     description: Retourne la blague correspondant à l’ID fourni.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la blague à récupérer
 *     responses:
 *       200:
 *         description: Blague trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       404:
 *         description: Blague non trouvée
 */

router.get("/api/joke/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(`id: ${id}`);
    const jokesLength = await Joke.count();
    if (id <= 0 || id > jokesLength) {
      res.status(404).json({ message: "Blague non trouvée" });
    } else {
      const jokeById = await Joke.findByPk(id);
      res.status(200).json(jokeById);
    }
  } catch (err) {
    next(err);
  }
});

/**
 * @swagger
 * /api/random-joke:
 *   get:
 *     summary: Récupère une blague aléatoire
 *     description: Retourne une blague choisie au hasard dans la base de données.
 *     responses:
 *       200:
 *         description: Blague aléatoire trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       404:
 *         description: Aucune blague disponible
 */

router.get("/api/random-joke", async (_req, res, next) => {
  try {
    const jokesCount = await Joke.count();
    const randomId = Math.floor(Math.random() * jokesCount) + 1;
    const randomJoke = await Joke.findByPk(randomId);
    res.status(200).json(randomJoke);
  } catch (err) {
    next(err);
  }
});

export default router;
