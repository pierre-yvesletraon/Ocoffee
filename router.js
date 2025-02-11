import { Router } from "express";

import mainController from "./controllers/main.controller.js";

const router = Router();

router.get("/", mainController.renderHomePage);
router.get("/catalog", mainController.renderCatalogPage);
router.get("/product/:id", mainController.renderProductPage);
router.get("/catalog/search", mainController.searchByCategory);

router.use((req, res) => {
  res.status(404).render("404");
});

export default router;