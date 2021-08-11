// eslint-disable-next-line max-len
const randomArray = (length = 5, max = 671) => [...new Array(length)].map(() => Math.round(Math.random() * max));

export const fetchCastMembers = async () => {

  const arr = randomArray();
  const results = await Promise.all(arr.map(async castId => {
    const res = await fetchCast(castId);
    return res;
  }));

  return results;
};

export const fetchCast = async (id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const json = await res.json();

  return json;
};
