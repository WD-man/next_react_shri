import React from 'react';
import classnames from 'classnames';

interface TabListProps {
  tabs: string[],
  active: string
}

const TabList = ({ tabs, active }: TabListProps) => {
  const getTabs = (arr: string[]) => {
    return arr.map((name: string) => {
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

export default TabList;
