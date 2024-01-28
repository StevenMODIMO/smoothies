const Post = require("../models/postModels");
const IP =require("ip")

const getPostTemplate = async (req, res) => {
  const locals = {
    title: "New Post +",
    description: "Create and Post a new blog Post",
  };
  res.render("create", { locals });
};

const getHomeTemplate = async (req, res) => {
  const locals = {
    title: "Nodejs Blog.",
    description: "Simple Blog created NodeJs, Express & MongoDB.",
  };
  res.render("home", locals);
};

const addPost = async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Empty fields detected." });
  }
  const ip = IP.address();

  try {
    const newPost = await Post.create({ title, content, ip });
    res.status(200).json(newPost);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getPosts = async (req, res) => {
  const locals = {
    title: "Read Blogs",
    description: "Surf through posts of various bloggers.",
  };
  try {
    const posts = await Post.find();
    res.render("blogs", { posts, locals });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getSinglePost = async (req, res) => {
  const locals = {
    title: `Blog with id: ${req.params.id}`,
    description: `Now reading blog post with id: ${req.params.id}`,
  };

  try {
    const post = await Post.findOne({ _id: req.params.id });
    res.render("blog", { post, locals });
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateBlog = async (req, res) => {
  const { title, content } = req.body;
  try {
    const update = await Post.findOneAndUpdate(
      { _id: req.params.id },
      { title, content }
    );
    res.status(200).json(update);
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Post.findOneAndDelete({ _id: req.params.id });
    res.status(200).json(deletedBlog);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getPostTemplate,
  getHomeTemplate,
  addPost,
  getPosts,
  getSinglePost,
  updateBlog,
  deleteBlog,
};
