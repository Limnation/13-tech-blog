const router = require("express").Router();
const { Comment } = require("../../models/");
// Use withAuth middleware to prevent access to route
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  const newComment = await Comment.create({
    ...req.body,
    userId: req.session.userId,
  });
  res.json(newComment);
  try {
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
