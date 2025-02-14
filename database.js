import pkg from "pg";
const { Pool } = pkg;

// Vérifiez si vous êtes en production ou en développement
const isProduction = process.env.NODE_ENV === "production";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: isProduction
    ? { rejectUnauthorized: false } // Activer SSL en production (Render)
    : false, // Désactiver SSL en local
});

pool
  .connect()
  .then(() => console.log("Connecté à la base de données PostgreSQL"))
  .catch((err) =>
    console.error("Erreur lors de la connexion à PostgreSQL :", err)
  );

export default pool;
