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

  const buttonBlocks = (
    <div>
      {createList(repos)}
      <a href="/api/repos/create">Создать</a><br/>
      <a href="/api/repos/delete">Удалить</a>
    </div>
  );

  return <div>{buttonBlocks}</div>;
};

Index.getInitialProps = async ({ reduxStore }) => {
  const { dispatch } = reduxStore;
  await dispatch(getRepos());
  return {};
};

export default Index;
