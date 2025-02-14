import pkg from "pg";
const { Pool } = pkg;

const isProduction = process.env.NODE_ENV === "production";

console.log("DATABASE_URL:", process.env.DATABASE_URL); // Log pour vérifier l'URL

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: isProduction ? { rejectUnauthorized: false } : false,
});

export default pool;
