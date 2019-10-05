import React from 'react';

const BreadCrumbs = () => {
  return (
    <div
      className="Repository-BreadCrumbs BreadCrumbs Text_size_m Text_weight_bold Text_view_ghost 
        Section_spaceV_s Section_border_bottom Section_borderSize_s Section_borderColor_gray"
    >
      <a
        href="/"
        className="Repository-Crumb BreadCrumbs-Crumb BreadCrumbs-Crumb_state_current Text_view_primary"
      >
        arcadia
      </a>
    </div>
  );
};

export default BreadCrumbs;
