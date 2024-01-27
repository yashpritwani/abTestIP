const express = require('express');
const router = express.Router();

const abCont = require("../controller/ab");

router.get("/", [], abCont.list);

module.exports = router;