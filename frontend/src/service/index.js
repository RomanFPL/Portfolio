const getApiData = async (url) => {
  try {
    const getPromiseData = await fetch(url);
    const data = getPromiseData.json();
    return data;
  } catch (e) {
    throw new Error(`Connection problems were found: ${e}`);
  }
};

export { getApiData };
