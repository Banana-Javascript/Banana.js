const log = require('./modules/log.js')

log("Bananajs is Starting up.")

  // Vars and Stuff

  var verison = "v1.1.0"
  var CODEHOLDER = "sillyangel"


 


function Banana(string) {
  if (string === "ver") {
      return log(`Banana.js, ${verison}, made by ${CODEHOLDER}`)
  }
  if (string === "Help") {
    return log("Check out https://docs.banana-corp.tk")
  }
}

module.export = Banana