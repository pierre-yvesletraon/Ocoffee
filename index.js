import dotenv from "dotenv";
import path from "path";
import express from "express";
import router from "./router.js";
import pool from "./database.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));
app.use(express.static(path.join(process.cwd(), "public")));
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.send(`Heure actuelle de la base de données : ${result.rows[0].now}`);
  } catch (err) {
    console.error("Erreur lors de la requête à la base de données :", err);
    res.status(500).send("Erreur serveur");
  }
});

app.use(router);

app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution : http://localhost:${port}`);
});
