import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getStaff, getRepos } from '../store/actions';

import Header from '../components/common_blocks/header/header.tsx';
import BreadCrumbs from '../components/common_blocks/bread-crumbs/bread-crumbs.tsx';
import ChooseBranch from '../components/common_blocks/choose-branch/choose-branch.tsx';
import TabList from '../components/common_blocks/tab-list/tab-list.tsx';
import Repository from '../components/common_blocks/repository/repository.tsx';

const Directory = () => {
  const repos = useSelector(state => state.repos);
  const staff = useSelector(state => state.staff);
  const router = useRouter();

  const { name, path = '' } = router.query;

  return (
    <section className="Directory Page">
      <Header current={name} repos={repos} />
      <div className="Page-Content Section_spaceH_xxl">
        <BreadCrumbs isDirectory path={path.split('$')} name={name} />
        <ChooseBranch name={name} currentBranch="master" />
        <TabList active="files" tabs={['files', 'branches']} />
        <Repository list={staff} />
      </div>
    </section>
  );
};

Directory.getInitialProps = async ({ reduxStore, query }) => {
  const { name, path } = query;

  const { dispatch } = reduxStore;
  await dispatch(getStaff(name, path));
  await dispatch(getRepos());
  return { platform: 'desktop' };
};

export default Directory;
