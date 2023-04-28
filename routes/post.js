const router = require("express").Router();
const { publicPosts, privatePosts } = require("../db/Post");
const JWT = require("jsonwebtoken");
const checkJWT = require("../middleware/checkJWT");

router.get("/public", (req, res) => {
  return res.json(publicPosts);
});

router.get("/private", checkJWT, (req, res) => {
  return res.json(privatePosts);
});

module.exports = router;
