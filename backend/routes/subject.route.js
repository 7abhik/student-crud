module.exports = app => {
    const subjects = require("../controllers/subject.controller");
  
    var router = require("express").Router();
  
    // Create a new Subject
    router.post("/", subjects.create);
  
    // Retrieve all Subjects
    router.get("/", subjects.findAll);
  
    // Retrieve all published Subjects
    router.get("/published", subjects.findAllPublished);
  
    // Retrieve a single Subject with id
    router.get("/:id", subjects.findOne);
  
    // Update a Subject with id
    router.put("/:id", subjects.update);
  
    // Delete a Subject with id
    router.delete("/:id", subjects.delete);
  
    // Create a new Subject
    router.delete("/", subjects.deleteAll);
  
    app.use('/api/subjects', router);
  };