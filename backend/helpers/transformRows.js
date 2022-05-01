const transformData = async (sheet) => {
  try {
    const data = (await sheet.getRows()).map((x) => x._rawData);
    const headers = sheet.headerValues;
    const transformedData = data.map((row) =>
      row.reduce((acc, cv, y) => ({ ...acc, [headers[y]]: cv }), {})
    );
    return transformedData;
  } catch (e) {
    return {
      error:
        "No values in the header row - fill the first row with header values before trying to interact with rows",
    };
  }
};

module.exports = transformData;
