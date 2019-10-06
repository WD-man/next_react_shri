import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './file.css';

const File = ({ blob, name }) => {
  const fileClasses = classnames('File');

  function byteCount(s) {
    return encodeURI(s).split(/%..|./).length - 1;
  }

  const size = `(${byteCount(blob)} bytes)`;

  const headerClasses = classnames(
    'File-Header',
    'Section_spaceV_s',
    'Section_spaceH_m',
    'Section_border_all',
    'Section_borderColor_gray',
  );
  return (
    <div className={fileClasses}>
      <header className={headerClasses}>
        <div className="File-Name">
          {name}
          <span className="File-Size Text_view_ghost">{size}</span>
        </div>
      </header>
      <pre className="File-CodeSection">{blob}</pre>
    </div>
  );
};

File.propTypes = {
  blob: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
};

export default File;
