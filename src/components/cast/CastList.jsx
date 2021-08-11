import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Cast from './Cast.jsx';

const CastList = ({ castMembers }) => (
  <ul>
    {castMembers.map(cast => (
      <Link to={`/${cast.id}`} key={cast.id}>
        <li>
          <Cast 
            name={cast.name}
            image={cast.image}
          />
        </li>
      </Link>
    ))}
  </ul>
);

CastList.propTypes = {
  castMembers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.int,
      name: PropTypes.string,
      status: PropTypes.string,
      species: PropTypes.string,
      type: PropTypes.string,
      gender: PropTypes.string,
      origin: PropTypes.object,
      location: PropTypes.object,
      image: PropTypes.string,
      episode: PropTypes.arrayOf(
        PropTypes.string
      ),
    })
  ).isRequired,
};

export default CastList;
