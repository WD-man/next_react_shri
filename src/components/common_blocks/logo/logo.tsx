import React from 'react';
import Link from 'next/link';
import './logo.css';

interface LogoProps {
  className: string[]
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/">
      <a href="/" className={['Logo', ...className].join(' ')}>
        <img src={require('./img/logotype.svg')} alt="yandex arcanum" />
      </a>
    </Link>
  );
};

export default Logo;
