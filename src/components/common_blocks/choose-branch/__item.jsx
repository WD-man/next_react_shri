import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ChooseBrancItem = ({ active }) => {
  const className = classNames('ChooseBranch-Item', 'Section_spaceH_s', 'Section_spaceV_xs', {
    'ChooseBranch-Item_state_active': active,
  });

  return (
    <li className={className}>
      <a href="/" className="DropdownList-Link Text_size_xl">
        <div className="ChooseBranch-Name">branch name</div>
        <div className="ChooseBranch-Time">Last commit 4 days ago</div>
      </a>
    </li>
  );
};

ChooseBrancItem.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default ChooseBrancItem;
