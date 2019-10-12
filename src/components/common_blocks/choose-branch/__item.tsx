import React from 'react';
import classNames from 'classnames';

interface ChooseBranchItemProps {
  active: boolean
}

const ChooseBranchItem = ({ active }: ChooseBranchItemProps) => {
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

export default ChooseBranchItem;
