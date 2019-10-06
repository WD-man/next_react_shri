import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './__choose_branch.css';
import ChooseBrancItem from './__item';

const ChooseBranch = ({ name, currentBranch }) => {
  const [currentItem] = useState(0);
  const [openedList, setOpenedList] = useState(false);

  const listClassNames = classnames('ChooseBranch-List', ' DropdownLis', {
    'ChooseBranch-List_state_opened': openedList,
  });
  const headerClassNames = classnames('ChooseBranch-Header', 'Text_size_xxl', {
    'ChooseBranch-Header_state_opened': openedList,
  });

  const getBranches = arr => {
    return arr.map((item, index) => (
      <ChooseBrancItem key={`br_${item || index}`} active={currentItem === index} />
    ));
  };

  const click = () => {
    setOpenedList(!openedList);
  };

  return (
    <div className="ChooseBranch Section_indentB_s Section_spaceV_m">
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div onClick={click} className={headerClassNames}>
        <span className="ChooseBranch-Title">{name}</span>
        <span className="ChooseBranch-BranchName Text_view_ghost">{currentBranch}</span>
      </div>
      <ul className={listClassNames}>{getBranches(Array.from({ length: 4 }))}</ul>
      <div className="ChooseBranch-Info">
        <span>
          Last commit
          <a href="/" className="Repository-CommitHash Text_view_link">
            <span> c4d288 </span>
          </a>
        </span>
        <span> on </span>
        <span className="Text_view_link"> 19 Sept 2019, 23:23 </span>
        <span> by </span>
        <span className="Text_view_name"> Pavel Deev </span>
      </div>
    </div>
  );
};

ChooseBranch.propTypes = {
  name: PropTypes.string.isRequired,
  currentBranch: PropTypes.string,
};

ChooseBranch.defaultProps = {
  currentBranch: 'master',
};

export default ChooseBranch;
