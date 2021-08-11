import React, { useEffect, useState } from 'react';
import CastList from '../components/cast/CastList.jsx';
import { fetchCastMembers } from '../services/Api';

const RickAndMortyCast = () => {
  console.log('hello');

  const [loading, setLoading] = useState(true);
  const [cast, setCast] = useState([]);

  useEffect(async () => {
    const cast = await fetchCastMembers();
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
