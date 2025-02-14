import pool from "./database.js"; // Importation du pool depuis database.js

const dataMapper = {
  // Récupérer les trois premiers cafés
  async getThreeCoffees() {
    try {
      const results = await pool.query(
        `SELECT * FROM "coffees" ORDER BY "id" ASC LIMIT 3`
      );
      return results.rows; // Retourne les lignes
    } catch (err) {
      console.error(
        "Erreur lors de la récupération des trois premiers cafés :",
        err
      );
      throw err; // Propager l'erreur pour la gérer ailleurs si nécessaire
    }
  },

  // Récupérer tous les cafés
  async getAllCoffees() {
    try {
      const results = await pool.query(`SELECT * FROM "coffees"`);
      return results.rows; // Retourne toutes les lignes
    } catch (err) {
      console.error("Erreur lors de la récupération de tous les cafés :", err);
      throw err;
    }
  },

  // Récupérer un café par son ID
  async getOneCoffee(id) {
    try {
      const results = await pool.query(
        `SELECT * FROM "coffees" WHERE "id" = $1`,
        [id]
      );
      return results.rows[0]; // Retourne une seule ligne (le café correspondant)
    } catch (err) {
      console.error(
        `Erreur lors de la récupération du café avec l'ID ${id} :`,
        err
      );
      throw err;
    }
  },

  // Rechercher des cafés par catégorie
  async searchByCategory(category) {
    try {
      const results = await pool.query(
        `SELECT * FROM "coffees" WHERE "category" = $1`,
        [category]
      );
      return results.rows; // Retourne les lignes correspondant à la catégorie
    } catch (err) {
      console.error(
        `Erreur lors de la recherche de cafés dans la catégorie "${category}" :`,
        err
      );
      throw err;
    }
  },
};

export default dataMapper;
