import React, { useState } from 'react';
import './choose_repo.css';
import Item from './__item/__item';

export interface ChooseRepoProps {
  repos: string[],
  current: string
}

const ChooseRepo = ({ repos, current } : ChooseRepoProps) => {
  const [opened, setState] = useState(false);
  const getReposList = (reposArr: string[]) => {
    return reposArr.map(item => <Item key={`dir_${item}`} title={item} />);
  };

  const getOpenedClass = () => {
    return opened ? 'ChooseRepo_state_open' : '';
  };

  const click = () => {
    setState(!opened);
  };

  return (
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

export default ChooseRepo;
