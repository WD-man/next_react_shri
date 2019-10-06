import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// <!--    <ul class="repository__dir-row table__row section_space-v_s section_border_bottom-s section_border-color_gray">-->
// <!--      <li class="table__item table__name repository__name section_indent-b_s repository__name_type_dir">api</li>-->
// <!--      <li class="table__item table__hash">4febdl</li>-->
// <!--      <li class="table__item table__message section_indent-b_s"><span class="text_view_link">ARCADIA-771:</span> append /trunk/arcadia/</li>-->
// <!--      <li class="table__item table__committer">by Pavel,</li>-->
// <!--      <li class="table__item table__date text_align_right">Ever and forever</li>-->
// <!--    </ul>-->
const RepositoryItem = ({ file, hash, data, author, commitMessage, isDirectory }) => {
  const rowClassName = classnames(
    'Repository-DirRow',
    'Table-Row',
    'Section_border_bottom',
    'Section_borderSize_s',
    'Section_borderColor_gray',
  );
  const itemClassname = classnames('Section_spaceV_s');

  const fileNameClassNames = classnames('Repository-Item', 'Repository-Name', {
    'Repository-Item_type_directory': isDirectory,
    'Repository-Item_type_file': !isDirectory,
  });

  const linkClassName = classnames('Repository-Link');

  const committerClassNames = classnames('Text_view_name');

  const shortHash = hash.slice(0, 6);

  return (
    <tr className={rowClassName}>
      <td className={[itemClassname, fileNameClassNames].join(' ')}>{file}</td>
      <td className="Repository-Item">
        <a className={[itemClassname, linkClassName].join(' ')} href="/">
          {shortHash}
        </a>
      </td>
      <td className="Repository-Item">{commitMessage}</td>
      <td className={[itemClassname, committerClassNames].join(' ')}>{author}</td>
      <td className="Repository-Item">{data}</td>
    </tr>
  );
};

RepositoryItem.propTypes = {
  file: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  commitMessage: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  isDirectory: PropTypes.bool.isRequired,
};

export default RepositoryItem;
