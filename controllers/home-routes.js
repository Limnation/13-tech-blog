const router = require("express").Router();
const { Post, Comment, User } = require("../models/");

router.get("/", async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/post/:id", async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {});

router.get("/signup", (req, res) => {});

module.exports = router;
