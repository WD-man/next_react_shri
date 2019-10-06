import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import './bread-crumbs.css';

const BreadCrumbs = ({ path }) => {
  const getPath = arr => {
    return arr.map(item => {
      return (
        <Link key={`crumb_${item}`} href={`/${item}`}>
          <a
            href={`/${item}`}
            className="Repository-Crumb BreadCrumbs-Crumb BreadCrumbs-Crumb_state_current Text_view_primary"
          >
            {`/ ${item}`}
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
      {getPath(path)}
    </div>
  );
};

BreadCrumbs.propTypes = {
  path: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BreadCrumbs;
