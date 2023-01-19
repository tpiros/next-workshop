const baseURL = 'https://next-workshop-api.vercel.app/api/';

const fetchData = async (endpoint) => {
  const res = await fetch(`${baseURL}/${endpoint}`);
  const data = await res.json();
  return data;
};

export default fetchData;
