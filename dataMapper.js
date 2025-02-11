import client from './database.js';

const dataMapper = {
  async getThreeCoffees() {
    const results = await client.query(`SELECT * FROM "coffees" ORDER BY "id" ASC LIMIT 3`);
    const coffees = results.rows;
    return coffees;
  },

  async getAllCoffees() {
    const results = await client.query(`SELECT * FROM "coffees"`);
    const coffees = results.rows;
    return coffees;
  },

  async getOneCoffee(id) {
    const results = await client.query(`SELECT * FROM "coffees" WHERE "id" = $1`, [id]);
    const coffee = results.rows[0];
    return coffee;
  },

  async searchByCategory(category) {
    const results = await client.query(`SELECT * FROM "coffees" WHERE "category" = $1`, [category]);
    const coffees = results.rows;
    return coffees;
  },
};

export default dataMapper;