const { GoogleSpreadsheet } = require("google-spreadsheet");
const token = require("../google-credentials.json")

async function getSheet(sheetName) {
  try{
    const doc = new GoogleSpreadsheet(token.sheet_id);
    await doc.useServiceAccountAuth({
      client_email: token.client_email,
      private_key: token.private_key,
    });
    await doc.loadInfo();
    return (sheet = doc.sheetsByTitle[sheetName]);
  } catch(e) {
    throw new Error('There no tokens in your app' + e)
  }
}

module.exports = getSheet;
