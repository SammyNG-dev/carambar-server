import cors from "cors";
import express from "express";
import "dotenv/config";

const app = express();

app.use(cors());

app.use(express.json());

import router from "./router.js";

app.use(router);

export default app;
