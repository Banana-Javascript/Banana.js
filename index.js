const log = require('./modules/log.js')

log("Bananajs is Starting up.")

  // Vars and Stuff

  var verison = "v1.1.0"
  var CODEHOLDER = "sillyangel"


    .log(`Banana.js, ${verison}, made by ${CODEHOLDER}`)


function Banana(string) {
  if (string === "NodejsCool") {
    log("Nodejs is Cool")
  }
  if(string === "help") {
    log("you mean Bhelp?")
  }
}

module.export = Banana