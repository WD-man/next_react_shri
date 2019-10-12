import React from 'react';

import './main.css';

import Headers from './__header';
import Item, { RepositoryItemProps } from './__item';

interface RepositoryProps {
  list: RepositoryItemProps[];
}

const Repository = ({ list }: RepositoryProps) => {
  const getContent = (arr: RepositoryItemProps[]) => {
    return arr.map(item => <Item key={`cont_${item.file}`} {...item} />);
  };

  return (
    <div className="Repository">
      <table className="Table">
        <Headers />
        <tbody>{getContent(list)}</tbody>
      </table>
    </div>
  );
};

export default Repository;
