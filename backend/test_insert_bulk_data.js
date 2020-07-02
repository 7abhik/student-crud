
const models = require('./models');
const Subject = models.Subject;
const Student = models.Student;
const Faculty = models.Faculty;


Subject.bulkCreate([
    {name: 'maths'},
    {name: 'science'},
    {name: 'english'},
    {name: 'physics'},
    {name: 'biology'},
    {name: 'chemistry'},

  ])
  .then((newUsers) => {
    console.log(newUsers)
  })
  .catch((err) => {
    console.log("Error while users creation : ", err)
  })


  // Student.bulkCreate([
  //   {firstName:'abhishek',lastName:'kr',email:'ab@cd.com',age:'23'},
  //   {firstName:'Ramesh',lastName:'kr',email:'ab@cd.com',age:'23'},
  //   {firstName:'suresh',lastName:'kr',email:'ab@cd.com',age:'23'},
  //   {firstName:'akash',lastName:'kr',email:'ab@cd.com',age:'23'},
  //   {firstName:'rahul',lastName:'kr',email:'ab@cd.com',age:'23'},
  //   {firstName:'nilesh',lastName:'kr',email:'ab@cd.com',age:'23'},
  //   {firstName:'sunadar',lastName:'kr',email:'ab@cd.com',age:'23'},
  //   {firstName:'nirbhay',lastName:'kr',email:'ab@cd.com',age:'23'},
  //   {firstName:'ayushi',lastName:'kr',email:'ab@cd.com',age:'23'},
 
  //  ])
  //  .then((newUsers) => {
  //    console.log(newUsers)
  //  })
  //  .catch((err) => {
  //    console.log("Error while users creation : ", err)
  //  })


  //  Faculty.bulkCreate([
  //   {firstName:'Faculty abhishek',lastName:'Faculty kr',email:'ab@cd.com',age:'23'},
  //   {firstName:'Faculty Ramesh',lastName:'Faculty kr',email:'ab@cd.com',age:'23'},
  //   {firstName:'Faculty suresh',lastName:'Faculty kr',email:'ab@cd.com',age:'23'},
  //   {firstName:'Faculty akash',lastName:'Faculty kr',email:'ab@cd.com',age:'23'},
  //   {firstName:'Faculty rahul',lastName:'Faculty kr',email:'ab@cd.com',age:'23'},
  //   {firstName:'Faculty nilesh',lastName:'Faculty kr',email:'ab@cd.com',age:'23'},
  //   {firstName:'Faculty sunadar',lastName:'Faculty kr',email:'ab@cd.com',age:'23'},
  //   {firstName:'Faculty nirbhay',lastName:'Faculty kr',email:'ab@cd.com',age:'23'},
  //   {firstName:'Faculty ayushi',lastName:'Faculty kr',email:'ab@cd.com',age:'23'},
 
  //  ])
  //  .then((newUsers) => {
  //    console.log(newUsers)
  //  })
  //  .catch((err) => {
  //    console.log("Error while users creation : ", err)
  //  })