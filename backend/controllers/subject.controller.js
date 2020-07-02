const db = require("../models");
const Subject = db.subjects;
const Op = db.Sequelize.Op;

// Create and Save a new Subject
exports.create = (req, res) => {
  console.log('Hello');
};

// Retrieve all Subjects from the database.
exports.findAll = (req, res) => {
  console.log('Hello2');
};

// Find a single Subject with an id
exports.findOne = (req, res) => {
  
};

// Update a Subject by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Subject with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Subjects from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Subjects
exports.findAllPublished = (req, res) => {
  
};