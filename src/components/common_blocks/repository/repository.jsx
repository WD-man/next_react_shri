import React from 'react';
import PropTypes from 'prop-types';

import './main.css';

import Headers from './__header';
import Item from './__item';

const Repository = ({ list }) => {
  const getContent = arr => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return arr.map(item => <Item key={`cont_${item.file}`} {...item} />);
  };

  return (
    <div className="Repository">
      <table className="Table">
        <Headers />
        <tbody>{getContent(list)}</tbody>
      </table>
    </div>
  );
};

// Repository.propTypes = {
//   list: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string,
//     }),
//   ).isRequired,
// };

Repository.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.string,
    }),
  ).isRequired,
};

export default Repository;
