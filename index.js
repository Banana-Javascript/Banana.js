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
    }}

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

const banana = new Banana;
var command1;
var cname;
module.exports = {
    Login: async (command) => {
        if(command1 === "Login") return log("Enter in Username"), log("Enter in Password");
    },
    Client: async (string) => {
        if(string) {
            return string;
        } else {
            console.error("you need to input a string");
        }
    }
}



