const router = require("express").Router();
const getSheet = require("../common/googleSheetApi");
const transformData = require("../helpers/transformRows");
const transformDataSkill = require("../helpers/transformRowsSkill");

router.get("/projects", async function (req, res, next) {
  res.json(await transformData(await getSheet("projects")));
});

router.get("/skills", async function (req, res, next) {
  res.json(await transformDataSkill(await getSheet("skills")));
});

router.get("/menu", async function (req, res, next) {
  res.json(await transformData(await getSheet("menu")));
});

router.get("/profile", async function (req, res, next) {
  res.json(await transformData(await getSheet("profile")));
});

module.exports = router;
