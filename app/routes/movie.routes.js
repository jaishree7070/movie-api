module.exports = app => {
  const movies = require("../controllers/movie.controller.js");

  var router = require("express").Router();

  // Create a new movie
  router.post("/", movies.create);

  // Retrieve all movies
  router.get("/", movies.findAll);

  // Retrieve all published movies
  router.get("/published", movies.findAllPublished);

  // Retrieve a single movie with id
  router.get("/:id", movies.findOne);

  // Update a movie with id
  router.put("/:id", movies.update);

  // Delete a movie with id
  router.delete("/:id", movies.delete);

  // Create a new movie
  router.delete("/", movies.deleteAll);

  app.use("/api/movies", router);
};
