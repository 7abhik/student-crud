
const models = require('./models');
const Subject = models.Subject;
const Student = models.Student;
const Faculty = models.Faculty;
const StudentSubject = models.StudentSubject;

// Student.findAll({})
// .then((user) => {
//   console.log(user)
// })
// .catch((err) => console.log("Error while searching user : ", err))

Student.findAll({
  include: [
    { model: Subject,as: "subjects", attribute:'StudentSubject'}
  ]
}).then((data) => {
  console.log(JSON.stringify(data))
})
  .catch((err) => console.log("Error while searching user : ", err))