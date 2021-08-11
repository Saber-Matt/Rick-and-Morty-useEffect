import React, { useState, useEffect } from 'react';
import { fetchCast } from '../services/Api.jsx';
import { useParams } from 'react-router';
import CastDetail from '../components/cast/CastDetail.jsx';

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [cast, setCast] = useState({});
  const { id } = useParams();

  useEffect(async () => {
    const cast = await fetchCast(id);
    setCast(cast);
    setLoading(false);
  }, [id]);

  if(loading) return <h1>Loading...</h1>;
  return <CastDetail
    name={cast.name}
    status={cast.status}
    species={cast.species}
    type={cast.type}
    gender={cast.gender}
    origin={cast.origin ? cast.origin.name : ''}
    location={cast.location ? cast.location.name : ''}
    image={cast.image}/>;
};

export default Detail;
