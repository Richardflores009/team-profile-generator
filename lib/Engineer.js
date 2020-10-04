const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, username) {
        super(name, id, email)
        this.gitHub = username
    }

    getGithub() {
        return this.gitHub
    }

    getRole() {
        return 'Engineer'
    }

}

module.exports = Engineer;