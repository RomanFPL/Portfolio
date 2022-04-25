const getApiData = async (url) => {
  const getPromiseData = await fetch(url);
  const data = getPromiseData.json();
  return data;
};

export { getApiData };
