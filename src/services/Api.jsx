// eslint-disable-next-line max-len

export const fetchCastMembers = async () => {

  const res = await fetch('https://rickandmortyapi.com/api/character/');
  const json = await res.json();

  return json.results;
};

export const fetchCast = async (id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const json = await res.json();

  return json;
};
