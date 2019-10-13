import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getRepos } from '../store/repos/repos_actions';
import { getBlob } from '../store/blob/blob_actions';
import {State} from '../store';

import Header from '../components/common_blocks/header/header';
import BreadCrumbs from '../components/common_blocks/bread-crumbs/bread-crumbs';
import ChooseBranch from '../components/common_blocks/choose-branch/choose-branch';
import TabList from '../components/common_blocks/tab-list/tab-list';
import File from '../components/common_blocks/file/file';

const FilePage = () => {
  const repos = useSelector((state: State) => state.repos);
  const blob = useSelector((state: State) => state.blob || [])
    .map(({ raw }) => raw)
    .join('')
    .split('\\n')
    .map((row, index) => `${index + 1}.  ${row}\n`).join('');
  const router = useRouter();

  const { name = '', path = '' } = router.query;

  // @ts-ignore
  const arr = path.split('$');

  return (
    <section className="File Page-Content">
      <Header current={name as string} repos={repos} />
      <div className="Section_spaceH_xxl">
        <BreadCrumbs isDirectory path={arr} name={name as string} />
        <ChooseBranch currentBranch="master" name={name as string} />
        <TabList active="files" tabs={['files', 'branches']} />
        <File blob={blob} name={path as string} />
      </div>
    </section>
  );
};

// @ts-ignore
FilePage.getInitialProps = async ({ reduxStore, query }) => {
  const { name, path } = query;

  const { dispatch } = reduxStore;
  await dispatch(getBlob(name, path));
  await dispatch(getRepos());
  return { platform: 'desktop' };
};

export default FilePage;
