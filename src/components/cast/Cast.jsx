import React from 'react';
import PropTypes from 'prop-types';

const Cast = ({ name, image }) => {
  return (
    <>
      <h2>{name}</h2>
      <img src={image} />
    </>
  );
};

Cast.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Cast;
