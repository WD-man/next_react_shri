import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './choose_repo.css';
import Item from './__item/__item';

const ChooseRepo = ({ repos, current }) => {
  const [opened, setState] = useState(false);
  const getReposList = reposArr => {
    return reposArr.map(item => <Item key={`dir_${item}`} title={item} />);
  };

  const getOpenedClass = () => {
    return opened ? 'ChooseRepo_state_open' : '';
  };

  const click = () => {
    setState(!opened);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
    <nav
      role="list"
      onClick={click}
      className={[
        'ChooseRepo Section_border_bottom Section_borderSize_m Section_borderColor_red Section_spaceV_l',
        getOpenedClass(),
      ].join(' ')}
    >
      <div className="ChooseRepo-Header">
        <span className="ChooseRepo-Title Text_weight_bold">Repository</span>
        {current}
      </div>
      <ul className="ChooseRepo-List DropdownList Text_size_m Section_spaceV_m Section_spaceH_l">
        {getReposList(repos)}
      </ul>
    </nav>
  );
};

ChooseRepo.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.string).isRequired,
  current: PropTypes.string.isRequired,
};

export default ChooseRepo;
