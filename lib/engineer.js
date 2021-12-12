    const Employee = require("./Employee");

    class Engineer extends Employee{

    constructor (name , id, email, github  ){
        super(name , id, email)
        this.github = github
    }
       getGitHub () {
            return this.github
        }

        getRole () {
            return "Engineer"
        }
        
    };
    
    var seth = new Engineer ("seth", 1, "whosdaman@gmail.com", "yesthatsme")
console.table(seth.getGitHub())
    module.exports = Engineer