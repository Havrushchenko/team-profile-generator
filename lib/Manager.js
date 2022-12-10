const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, oficeNumber){
        super(name, id, email);
        this.oficeNumber = oficeNumber;
        this.role = "Manager";
    }
    getGithub() {
        return this.oficeNumber;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Manager;