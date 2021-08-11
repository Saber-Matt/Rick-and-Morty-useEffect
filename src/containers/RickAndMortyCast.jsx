import React, { useEffect, useState } from 'react';
import CastList from '../components/cast/CastList.jsx';
import { fetchCast } from '../services/rickAndMortyApi';

const RickAndMortyCast = () => {
  const [loading, setLoading] = useState(true);
  const [cast, setCast] = useState([]);

  useEffect(async () => {
    const cast = await fetchCast();
    setCast(cast);
    setLoading(false);
  }, []);

  if(loading) return <h1>Loading...</h1>;
  return (
    <>
      <h1>Rick and Morty Cast</h1>
      <CastList cast={cast}/>
    </>
  );
};

export default RickAndMortyCast;
