const log = require("./modules/log.js")

var verison = "1.0.0"
var author = "@sillyangel"

function Banana(string) {
    if (string === "ver") {
        log("is-Banana verison, " + verison + " and created by " + author);
    }
}

module.exports = Banana;

