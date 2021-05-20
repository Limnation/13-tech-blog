const router = require("express").Router();
const { Post } = require("../../models/");
// Use withAuth middleware to prevent access to route
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  const reqBody = req.body;
  try {
    const newPost = await Post.create({
      ...reqBody,
      userId: req.session.userId,
    });
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  const affRows = [];
  affRows = await Post.update(req.body, {
    where: {
      id: req.params.id,
    },
  });

  if (affRows > 0) {
    res.status(200).end();
  } else {
    res.status(404).end();
  }
  try {
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  const affRows = [];
  affRows = Post.destroy({
    where: {
      id: req.params.id,
    },
  });

  if (affRows > 0) {
    res.status(200).end();
  } else {
    res.status(404).end();
  }
  try {
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
