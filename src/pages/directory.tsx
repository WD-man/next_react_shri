import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getRepos } from '../store/repos/repos_actions';
import { getStaff } from '../store/staff/staff_actions';
import {State} from '../store';

import Header from '../components/common_blocks/header/header';
import BreadCrumbs from '../components/common_blocks/bread-crumbs/bread-crumbs';
import ChooseBranch from '../components/common_blocks/choose-branch/choose-branch';
import TabList from '../components/common_blocks/tab-list/tab-list';
import Repository from '../components/common_blocks/repository/repository';

const Directory = () => {
  const repos = useSelector((state: State) => state.repos);
  const staff = useSelector((state: State) => state.staff);
  const router = useRouter();

  const { name = '', path = '' } = router.query;

  // @ts-ignore
  const arr = path.split('$');

  return (
    <section className="Directory Page">
      <Header current={name as string} repos={repos} />
      <div className="Page-Content Section_spaceH_xxl">
        <BreadCrumbs isDirectory path={arr} name={name as string} />
        <ChooseBranch name={name as string} currentBranch="master" />
        <TabList active="files" tabs={['files', 'branches']} />
        <Repository list={staff} />
      </div>
    </section>
  );
};

// @ts-ignore
Directory.getInitialProps = async ({ reduxStore, query }) => {
  const { name, path } = query;

  const { dispatch } = reduxStore;
  await dispatch(getStaff(name, path));
  await dispatch(getRepos());
  return { platform: 'desktop' };
};

export default Directory;
