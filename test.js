import pkg from "pg";
const { Pool } = pkg;

const databaseUrl = process.env.DATABASE_URL;

console.log("DATABASE_URL:", databaseUrl); // Vérification cruciale de l'URL

const pool = new Pool({
  connectionString: databaseUrl,
  ssl: {
    rejectUnauthorized: false, // Requis pour Render
  },
});

pool
  .query("SELECT NOW()")
  .then((res) => {
    console.log("Connexion réussie !", res.rows[0]);
    pool.end();
  })
  .catch((err) => {
    console.error("Erreur de connexion :", err);
    pool.end();
  });
