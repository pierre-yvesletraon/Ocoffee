import { Router } from "express";
import { renderHomePage, renderCatalogPage, renderProductPage } from "./controllers/main.controller.js";

const router = Router();

router.get("/", renderHomePage);
router.get("/catalog", renderCatalogPage);
router.get("/product", renderProductPage);

router.use((req, res) => {
  res.status(404).render("404");
});

export default router;