require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

app.use(express.static("public"));
app.use(express.json());

// Template Engine
app.set("view engine", "ejs");

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.get("/", (request, response) => {
  response.redirect("/blog");
});

app.use("/blog", blogRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => console.log(error));
