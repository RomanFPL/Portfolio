const router = require("express").Router();
const getSheet = require("../common/googleSheetApi");
const transformData = require("../helpers/transformRows");

router.get("/projects", async function (req, res, next) {
  res.json(await transformData(await getSheet("projects")));
});

module.exports = router;
