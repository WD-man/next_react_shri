import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import './logo.css';
import logo from './img/logotype.svg';

const Logo = ({ className }) => {
  return (
    <Link href="/">
      <a href="/" className={['Logo', ...className].join(' ')}>
        <img src={logo} alt="yandex arcanum" />
      </a>
    </Link>
  );
};

Logo.propTypes = {
  className: PropTypes.arrayOf(PropTypes.string),
};

Logo.defaultProps = {
  className: [],
};

export default Logo;
