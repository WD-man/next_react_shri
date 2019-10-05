import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const ChooseRepoItem = ({ title }) => {
  return (
    <li className="ChooseRepo-Item DropdownListItem">
      <Link href={`/directory?name=${title}`}>
        <a href={`/directory?name=${title}`} className="ChooseRepo-Link DropdownList-Link">
          {title}
        </a>
      </Link>
    </li>
  );
};

ChooseRepoItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ChooseRepoItem;
