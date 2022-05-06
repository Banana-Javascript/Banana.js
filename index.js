const log = require("./modules/log.js")
const fs = require('fs');

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
log("works!")



