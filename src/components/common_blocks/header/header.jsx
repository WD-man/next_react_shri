import React from 'react';
import './header.css';
import Logo from '../logo/logo';
import ChooseRepo from '../choose_repo/choose_repo';

export default props => {
  return (
    <header className="Header Section_spaceH_m Section_border_bottom Section_borderColor_ghost Section_borderSize_s">
      <Logo className={['Header-Logo']} />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <ChooseRepo {...props} />
    </header>
  );
};
