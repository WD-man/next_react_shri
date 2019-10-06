import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TabList = ({ tabs, active }) => {
  const getTabs = arr => {
    return arr.map(name => {
      const classNames = classnames('TabBar-Item', 'Text_transform_uppercase', 'Section_spaceV_s', {
        Section_border_bottom: name === active,
        Section_borderColor_red: name === active,
        Section_borderSize_m: name === active,
        Text_view_secondary: name !== active,
      });
      return (
        <div key={`tab_${name}`} className={classNames}>
          {name}
        </div>
      );
    });
  };
  return (
    <section className="Tabs">
      <div className="TabBar  Section_border_bottom Section_borderColor_gray Section_borderSize_s">
        {getTabs(tabs)}
      </div>
    </section>
  );
};

TabList.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  active: PropTypes.string.isRequired,
};

export default TabList;
