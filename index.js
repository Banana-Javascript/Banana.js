const log = require("./modules/log.js")
const client = require ("./modules/client.js")
const bananajs = require("./modules/banana.js");
const awc = require("./modules/awc.js");
const fs = require('fs');



var verison = "2.0.0"
var author = "@sillyangel"


class Login {
    // Setup
    constructor(name, email) {
        this.name  = name;
        this.email = email;

        // Commands 
        this.command = _command;
        this.verison = "2.0.0"

    }
    getInfo() {
        return { name: this.name, email: this.email };
    }
    


    
    

}

class Banana {
    constructor(name) {
        this.command = name;

    }
    getdiscription() {
        if (this.command === "") {
            
        }
    }
}
modules.exports.Banana = Banana;
modules.exports.Login = Login;




