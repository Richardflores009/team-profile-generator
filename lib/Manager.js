const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, email, id, officeNum){
        super(name, id, email)
        this.officeNum = officeNum
    }

    officeNumber() {
        return this.officeNum
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;