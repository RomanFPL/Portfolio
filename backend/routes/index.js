const router = require('express').Router();
const { GoogleSpreadsheet } = require('google-spreadsheet');
const token = require('../token.json')
const transformData = require('../helpers/transformRows')

async function getSheet(){
  const doc = new GoogleSpreadsheet(token.sheet_id);
  await doc.useServiceAccountAuth({
    client_email: token.client_email,
    private_key: token.private_key,
  });
  await doc.loadInfo(); 
  const sheet = doc.sheetsByTitle["projects"]; 
  return transformData(sheet)
}

router.get('/', async function(req, res, next) {
  res.json(await getSheet());
});

module.exports = router;
