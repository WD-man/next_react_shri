import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getStaff, getRepos } from '../store/actions';

import Header from '../components/common_blocks/header/header';
import BreadCrumbs from '../components/common_blocks/bread-crumbs/bread-crumbs';
import ChooseBranch from '../components/common_blocks/choose-branch/choose-branch';
import TabList from '../components/common_blocks/tab-list/tab-list';
import Repository from '../components/common_blocks/repository/repository';

const Directory = () => {
  const repos = useSelector(state => state.repos);
  const staff = useSelector(state => state.staff);
  const router = useRouter();

  const { name, path = '' } = router.query;

  return (
    <section className="directory">
      <Header current={name} repos={repos} />
      <div className="Section_spaceH_xxl">
        <BreadCrumbs isDirectory path={path.split('$')} name={name} />
        <ChooseBranch name={name} />
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
