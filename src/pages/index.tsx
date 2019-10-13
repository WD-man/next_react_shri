import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Redux, { Dispatch } from 'redux';

import { getRepos } from '../store/repos/repos_actions';
import { State } from '../store';

const Index = () => {
  const repos = useSelector((state: State) => state.repos);

  const createList = (reposArray: string[]) => {
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
      <a href="/api/repos/create">Создать</a>
      <br />
      <a href="/api/repos/delete">Удалить</a>
    </div>
  );

  return <div>{buttonBlocks}</div>;
};

interface InitProps {
  reduxStore: {
    dispatch: Dispatch;
  };
}

Index.getInitialProps = async ({ reduxStore }: InitProps) => {
  const { dispatch } = reduxStore;
  // @ts-ignore
  await dispatch(getRepos());
  return {};
};

export default Index;
