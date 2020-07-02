module.exports = app => {
    const faculties = require("../controllers/faculty.controller");
  
    var router = require("express").Router();
  
    // Create a new Faculty
    router.post("/", faculties.create);
  
    // Retrieve all Facultys
    router.get("/", faculties.findAll);
  
    // Retrieve all published Facultys
    router.get("/published", faculties.findAllPublished);
  
    // Retrieve a single Faculty with id
    router.get("/:id", faculties.findOne);
  
    // Update a Faculty with id
    router.put("/:id", faculties.update);
  
    // Delete a Faculty with id
    router.delete("/:id", faculties.delete);
  
    // Create a new Faculty
    router.delete("/", faculties.deleteAll);
  
    app.use('/api/faculties', router);
  };