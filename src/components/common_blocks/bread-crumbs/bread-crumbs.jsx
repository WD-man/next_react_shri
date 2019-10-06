import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import './bread-crumbs.css';

const BreadCrumbs = ({ path, name, isDirectory }) => {
  const getLinkPath = index => {
    if (path.length === 1) {
      return `/${isDirectory ? 'directory' : 'file'}?name=${name}&path=${path[0]}`;
    }
    return `/${isDirectory ? 'directory' : 'file'}?name=${name}&path=${path
      .slice(0, index + 1)
      .join('$')}`;
  };
  const getPath = arr => {
    return arr.map((item, index, array) => {
      if (array.length === 1 && !array[0]) return '';
      return (
        <Link key={`crumb_${item}`} href={getLinkPath(index)}>
          <a
            href={getLinkPath(index)}
            className="Repository-Crumb BreadCrumbs-Crumb Text_view_primary Text_size_l"
          >
            {`${item}`}
          </a>
        </Link>
      );
    });
  };
  return (
    <div
      className="Repository-BreadCrumbs BreadCrumbs Text_size_m Text_weight_bold Text_view_ghost 
        Section_spaceV_s Section_border_bottom Section_borderSize_s Section_borderColor_gray"
    >
      <Link href={`/directory?name=${name}`}>
        <a
          className="Repository-Crumb BreadCrumbs-Crumb BreadCrumbs-Crumb_state_current Text_view_primary Text_size_l"
          href={`/directory?name=${name}`}
        >
          {name}
        </a>
      </Link>
      {path.length ? getPath(path) : 'text'}
    </div>
  );
};

BreadCrumbs.propTypes = {
  path: PropTypes.arrayOf(PropTypes.string).isRequired,
  isDirectory: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default BreadCrumbs;
