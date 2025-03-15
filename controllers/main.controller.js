import dataMapper from "../dataMapper.js";
import fs from "fs";
import path from "path";
import emailjs from "@emailjs/nodejs";

const mainController = {
  async renderHomePage(req, res) {
    try {
      const coffees = await dataMapper.getThreeCoffees();
      res.render("index", { coffees });
    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
  },

  async renderCatalogPage(req, res) {
    try {
      const coffees = await dataMapper.getAllCoffees();
      res.render("catalog", { coffees, isFiltered: false });
    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
  },

  async renderProductPage(req, res) {
    try {
      const id = req.params.id;
      const coffee = await dataMapper.getOneCoffee(id);
      res.render("product", { coffee });
    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
  },

  async searchByCategory(req, res) {
    try {
      const category = req.query.category;
      const foundCoffees = await dataMapper.searchByCategory(category);
      res.render("catalog", { coffees: foundCoffees, isFiltered: true });
    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
  },

  async renderShopPage(req, res) {
    try {
      res.render("shop");
    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
  },

  async renderSendFilesPage(req, res) {
    try {
      res.render("sendFiles");
    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
  },

  async handleFileUpload(req, res) {
    try {
      const uploadedFile = req.file;
      const textData = req.body.coffeename;

      console.log("Fichier uploadé :", uploadedFile);
      console.log("Texte envoyé :", textData);
      res.render("sendFiles", {
        message: "Fichier et texte envoyés avec succès !",
      });
    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
  },

  async renderUploadedFiles(req, res) {
    try {
      const files = fs.readdirSync(path.join(process.cwd(), "uploads"));
      res.render("uploadedFiles", { files });
    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
  },

  async renderFormPage(req, res) {
    try {
      res.render("form");
    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
  },

  async sendEmail(req, res) {
    try {
      const { user_name, user_email, message } = req.body;
      const templateParams = {
        user_name: user_name,
        user_email: user_email,
        message: message,
      };
      await emailjs.send(
        "service_cx33b3d",
        "template_riowp6o",
        templateParams,
        {
          publicKey: "6PRXxuDxArwr13CwB",
          privateKey: "bkasviOePZLo72sQvrhX2",
        }
      );
      res
        .status(200)
        .render("form", { message: "Message envoyé avec succès !" });
    } catch (error) {
      console.error("Erreur lors de l'envoi des emails :", error);
      res.status(500).send("Erreur lors de l'envoi des emails.");
    }
  },
};

export default mainController;
