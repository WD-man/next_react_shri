import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getBlob, getRepos } from '../store/actions';

import Header from '../components/common_blocks/header/header';
import BreadCrumbs from '../components/common_blocks/bread-crumbs/bread-crumbs';
import ChooseBranch from '../components/common_blocks/choose-branch/choose-branch';
import TabList from '../components/common_blocks/tab-list/tab-list';
import File from '../components/common_blocks/file/file';

const FilePage = () => {
  const repos = useSelector(state => state.repos);
  const blob = useSelector(state => state.blob)
    .map(({ raw }) => raw)
    .join('')
    .split('\\n')
    .map((row, index) => `${index + 1}.  ${row}\n`);
  const router = useRouter();

  const { name, path } = router.query;

  return (
    <section className="file">
      <Header current={name} repos={repos} />
      <div className="Section_spaceH_xxl">
        <BreadCrumbs isDirectory path={path.split('$')} name={name} />
        <ChooseBranch name={name} />
        <TabList active="files" tabs={['files', 'branches']} />
        <File blob={blob} name={path} />
      </div>
    </section>
  );
};

FilePage.getInitialProps = async ({ reduxStore, query }) => {
  const { name, path } = query;

  const { dispatch } = reduxStore;
  await dispatch(getBlob(name, path));
  await dispatch(getRepos());
  return { platform: 'desktop' };
};

export default FilePage;
