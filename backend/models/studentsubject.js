'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentSubject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    this.belongsTo(models.Student,{foreignKey:'studentID'})
    this.belongsTo(models.Subject,{foreignKey:'subjectID'})
    }
  };
  StudentSubject.init({
    studentID: DataTypes.INTEGER,
    subjectID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StudentSubject',
  });
  return StudentSubject;
};