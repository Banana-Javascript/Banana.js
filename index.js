const log = require('./modules/log.js')
const fs = require("fs")


  // Vars and Stuff

  var verison = "v1.1.7"
  var CODEHOLDER = "sillyangel"


log(`Bananajs ${verison}, made by ${CODEHOLDER}`) ;


function Banana(string) {
  if (string === "ver") {
    return log('Bananajs is, ' + verison);
  } else {
    return console.error("not a command");
  }
}