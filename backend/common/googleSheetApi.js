const { GoogleSpreadsheet } = require("google-spreadsheet");
require("dotenv").config();

async function getSheet(sheetName) {
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  });
  await doc.loadInfo();
  return (sheet = doc.sheetsByTitle[sheetName]);
}

module.exports = getSheet;
