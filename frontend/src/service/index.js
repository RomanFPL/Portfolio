const getApiData = async () => {
  const getPromiseData = await fetch("http://localhost:3001/projects");
  const data = getPromiseData.json();
  return data;
};

export { getApiData };
