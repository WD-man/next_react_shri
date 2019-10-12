import React from 'react';
import classnames from 'classnames';

const RepositoryHeader = () => {
  const headers = ['Name', 'Last commit', 'Commit message', 'Committer', 'Updated'];

  const getHeaders = (arr: string[]) =>
    arr.map(name => {
      const classNames = classnames(
        'Table-Item',
        'Text_view_ghost',
        'Section_spaceV_s',
        'Repository-TableHeader',
        'Repository-Item',
        {
          'Repository-Message': name === 'Commit message',
          'Repository-Date': name === 'Updated',
        },
      );
      return (
        <th key={`td_${name}`} className={classNames}>
          {name}
        </th>
      );
    });
  return (
    <thead>
      <tr className="Repository-DirRow Table-Row , Section_border_bottom Section_borderSize_s Section_borderColor_ghost">
        {getHeaders(headers)}
      </tr>
    </thead>
  );
};

export default RepositoryHeader;
