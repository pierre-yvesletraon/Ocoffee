import express from 'express';
import mainController from "./controllers/main.controller.js";
import multer from 'multer';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.get("/", mainController.renderHomePage);
router.get("/catalog", mainController.renderCatalogPage);
router.get("/product/:id", mainController.renderProductPage);
router.get("/catalog/search", mainController.searchByCategory);
router.get("/allProducts", mainController.renderAllProductsPage);
router.get("/shop", mainController.renderShopPage);
router.get("/sendFiles", mainController.renderSendFilesPage);

router.post("/sendFiles", upload.single('uploaded_file'), mainController.handleFileUpload);
router.get('/uploadedFiles', mainController.renderUploadedFiles);

router.use((req, res) => {
  res.status(404).render("404");
});

export default router;