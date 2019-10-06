import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import { getRepos } from '../store/actions';

const Index = () => {
  const repos = useSelector(state => state.repos);

  const createList = reposArray => {
    return reposArray.map(item => (
      <div key={`list_${item}`}>
        <Link href={`/directory?name=${item}`}>
          <a href={`/directory?name=${item}`}>{item}</a>
        </Link>
      </div>
    ));
  };

  return createList(repos);
};

Index.getInitialProps = async ({ reduxStore }) => {
  const { dispatch } = reduxStore;
  await dispatch(getRepos());
  return {};
};

export default Index;
