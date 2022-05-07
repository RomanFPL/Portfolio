const { GoogleSpreadsheet } = require("google-spreadsheet");
const token = require("../token.json")

async function getSheet(sheetName) {
  const doc = new GoogleSpreadsheet(token.sheet_id);
  await doc.useServiceAccountAuth({
    client_email: token.client_email,
    private_key: token.private_key,
  });
  await doc.loadInfo();
  return (sheet = doc.sheetsByTitle[sheetName]);
}

module.exports = getSheet;
