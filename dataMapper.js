import client from './database.js';

const dataMapper = {
  async getThreeCoffeesForHomePage() {
    const results = await client.query(`SELECT * FROM "coffees" ORDER BY "id" ASC LIMIT 3`);
    const coffees = results.rows;
    return coffees;
  },
};

export default dataMapper;