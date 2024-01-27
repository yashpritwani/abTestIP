const { getLayoutForUser } = require("../utils/redis");

async function checkIPratio (req,res,next) {
  req.ipParameters = { ip: req.connection.remoteAddress};
  let layOutResp = await getLayoutForUser(req.connection.remoteAddress);
  if(layOutResp.existingLayout) res.status(200).send(layOutResp);
  else next();
}

module.exports = {checkIPratio};