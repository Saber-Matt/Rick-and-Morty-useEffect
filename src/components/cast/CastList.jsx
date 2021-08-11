import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Cast from './Cast.jsx';

const CastList = ({ cast }) => {
  const castElements = cast.map((castMember) => (
    <li  key={castMember.id}>
      <Link to={`/character/${castMember.id}`}>
        <Cast 
          {...castMember}
        />
      </Link>
    </li>
  ));
  return <ul>
    {castElements};
  </ul>;
};

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.int,
      name: PropTypes.string,
      // status: PropTypes.string,
      // species: PropTypes.string,
      // type: PropTypes.string,
      // gender: PropTypes.string,
      // origin: PropTypes.object,
      // location: PropTypes.object,
      image: PropTypes.string,
      // episode: PropTypes.arrayOf(
      //   PropTypes.string
      // ),
    })
  ).isRequired,
};

export default CastList;
