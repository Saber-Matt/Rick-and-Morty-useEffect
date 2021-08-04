import React from 'react';
import { PropTypes } from 'prop-types';
//import ArnoldItem from ''

function List({ listApi }) {
  const newList = listApi.map(({ _id, name, image }) => (
    <li key = {_id}>
      <APIitem id={_id} name={name} image={image} />
    </li>));

  return (
    <ul>
      {newList}
    </ul>
  );
}

List.propTypes = {
  listApi: PropTypes.array.isRequired
};

export default List;
