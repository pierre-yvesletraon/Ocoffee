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
};

export const renderCatalogPage = (req, res) => {
  res.render("catalog");
};

export const renderProductPage = (req, res) => {
  res.render("product");
};

export default mainController;