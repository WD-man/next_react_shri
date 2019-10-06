import React from 'react';
import classnames from 'classnames';

// <!--    <ul class="repository__dir-row table__row section_space-v_s section_border_bottom-s section_border-color_gray">-->
// <!--      <li class="table__item table__name repository__name section_indent-b_s repository__name_type_dir">api</li>-->
// <!--      <li class="table__item table__hash">4febdl</li>-->
// <!--      <li class="table__item table__message section_indent-b_s"><span class="text_view_link">ARCADIA-771:</span> append /trunk/arcadia/</li>-->
// <!--      <li class="table__item table__committer">by Pavel,</li>-->
// <!--      <li class="table__item table__date text_align_right">Ever and forever</li>-->
// <!--    </ul>-->
// <!--    <a class="table__link" href=""></a>-->
const RepositoryHeader = () => {
  const headers = ['Name', 'Last commit', 'Commit message', 'Committer', 'Updated'];

  const getHeaders = arr =>
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
