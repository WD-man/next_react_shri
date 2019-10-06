import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

const RepositoryItem = ({ file, hash, data, author, commitMessage, isDirectory }) => {
  const router = useRouter();
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

  const constructPath = () => {
    if (router.query.path) {
      return `${router.query.path}$${file}`;
    }
    return file;
  };

  return (
    <tr className={rowClassName}>
      <td className={[itemClassname, fileNameClassNames].join(' ')}>
        <Link href={`/directory?name=${router.query.name}&path=${constructPath()}`}>
          <a href={`/directory?name=${router.query.name}&path=${constructPath()}`}>{file}</a>
        </Link>
      </td>
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
