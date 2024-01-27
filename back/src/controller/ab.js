const AbClass = require("../service/ab");
const abService = new AbClass();

exports.list = async(req,res,next) => {
  try{
    let data = { ipParameters: req.ipParameters };
    const listResp = await abService.list(data);
    res.status(200).send(listResp);
  } catch (err) {
    res.status(500).send(`Error suirng list api call, ${JSON.stringify(err)}`);
  }
}