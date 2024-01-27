const abRouter = require("./ab");

const {checkIPratio} = require("../middleware/ip");

module.exports = app => {
  app.use("/",[checkIPratio],abRouter)
}