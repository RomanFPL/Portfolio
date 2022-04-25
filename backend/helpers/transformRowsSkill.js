const transformDataSkill = async (sheet) => {
  const data = (await sheet.getRows()).map((x) => x._rawData);
  const headers = sheet.headerValues;
  const transformedData = data.map((row) =>
    row.reduce((acc, cv, y) => ({ ...acc, [headers[y]]: cv }), {})
  );
  const extendParsedData = transformedData.map((row) =>
    row.knowledgeList
      ? { ...row, knowledgeList: row.knowledgeList.split(", ") }
      : { ...row }
  );
  const groupByLabel = extendParsedData.reduce((acc, cv) => {
    console.log(cv);
    if (
      acc.length === 0 ||
      (acc.length !== 0 && !acc.some((item) => item.label === cv.label))
    ) {
      acc.push({ label: cv.label, content: [cv] });
    } else {
      acc.map((item) =>
        item && item.label === cv.label ? item.content.push(cv) : ""
      );
    }
    return acc;
  }, []);
  return groupByLabel;
};

module.exports = transformDataSkill;
