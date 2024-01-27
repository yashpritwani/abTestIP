// As per received IP redirect to the proper layout or view info , ip hits number and information to be fetched from redis

const Test = require("../db/test");
const { determineLayout } = require("../utils/redis");

class AbClass {
  constructor() {}
  async list(data){
    try{
      let existingLayout = await determineLayout(data.ipParameters,JSON.stringify({msg:"success",data: await Test.find()}));
      return JSON.stringify({msg:"success",existingLayout});
    }catch(err){
      return err;
    }
  }
}

module.exports = AbClass;