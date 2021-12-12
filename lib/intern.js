const Employee = require("./Employee");

class Intern extends Employee{

constructor (name , id, email, school  ){
    super(name , id, email)
    this.school = school
}
   getSchool () {
        return this.school
    }

    getRole () {
        return "Intern"
    }
    
};

var seth = new Intern ("seth", 1, "whosdaman@gmail.com", "Big University")
console.table(seth.getSchool())
module.exports = Intern