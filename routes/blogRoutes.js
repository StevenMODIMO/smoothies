const router = require("express").Router();
const {
  getPostTemplate,
  getHomeTemplate,
  addPost,
  getPosts,
} = require("../controllers/blogControllers");

router.get("/create", getPostTemplate);

router.get("/", getHomeTemplate);

router.post("/new-post", addPost);

router.get("/read", getPosts);

module.exports = router;
