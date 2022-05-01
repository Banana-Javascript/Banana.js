const log = require("./modules/log.js")
const client = require ("./modules/client.js")


var verison = "2.0.0"
var author = "@sillyangel"


class Banana {
    // Setup
    constructor(_command) {
        log("Bananajs, v" + verison + " made by sillyangel")

        this.command = _command;


    }
    getCommand() {
        return this.command;
    }

    printDescription() {
        return log('Welcome to Bananajs Read https://docs.banana-corp.tk/ for more info.');
    }
    static Help() {
        return log('Read https://docs.banana-corp.tk/ for more info');
    }
}



class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    getemail() {
        return this.email;
    }
    getname() {
        return this.name;
    }
}



module.exports = Banana;
module.exports = User;