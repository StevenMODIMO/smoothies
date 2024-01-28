const router = require("express").Router();
const {
  getPostTemplate,
  getHomeTemplate,
  addPost,
  getPosts,
  getSinglePost,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogControllers");

router.get("/create", getPostTemplate);

router.get("/", getHomeTemplate);

router.post("/new-post", addPost);

router.get("/read", getPosts);

router.get("/read/:id", getSinglePost);

router.post("/update/:id", updateBlog);

router.delete("/delete/:id", deleteBlog);

module.exports = router;
