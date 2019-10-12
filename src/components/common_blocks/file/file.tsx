import React from 'react';
import classnames from 'classnames';

import './file.css';

interface FileProps {
  blob: string,
  name: string
}

const File = ({ blob, name }: FileProps) => {
  const fileClasses = classnames('File');

  function byteCount(s: string) {
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
          {name
            .split('$')
            .slice(-1)
            .join('')}
          <span className="File-Size Text_view_ghost">{size}</span>
        </div>
      </header>
      <pre className="File-CodeSection">{blob}</pre>
    </div>
  );
};

export default File;
