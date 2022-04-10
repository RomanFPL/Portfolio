const transformData = async (sheet) => {
    const data = (await sheet.getRows()).map(x => x._rawData);
    const headers = sheet.headerValues;
    const transformedData = data.map(row => row.reduce((acc, cv, y) => ({ ...acc, [headers[y]]: cv}), {}));
    return transformedData;
}

module.exports = transformData;