const Employee = require("./Employee");

class Manager extends Employee{

constructor (name , id, email, officeNumber  ){
    super(name , id, email)
    this.officeNumber = officeNumber
}
   getOfficeNumber () {
        return this.officeNumber
    }

    getRole () {
        return "Manager"
    }
    
};

var seth = new Manager ("seth", 1, "whosdaman@gmail.com", "999999999")
console.table(seth.getOfficeNumber())
module.exports = Manager