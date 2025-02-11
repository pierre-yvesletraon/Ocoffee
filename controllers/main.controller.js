import dataMapper from "../dataMapper.js";

const mainController = {
  async renderHomePage(req, res) {
    try {
      const coffees  = await dataMapper.getThreeCoffeesForHomePage();
      res.render("index", { coffees });

    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
  },

  async renderCatalogPage(req, res) {
    try {
      const coffees  = await dataMapper.getAllCoffees();
      res.render("catalog", { coffees });

    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
  },

  async renderProductPage(req, res) {
    try {
      const id = req.params.id;
      const coffee  = await dataMapper.getOneCoffee(id);

      if (! coffee) {
        res.status(404).render("404");
        return;
      }
      res.render("product", { coffee });

    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
  },
};

export default mainController;