import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getStaff, getRepos } from '../store/actions';

import Header from '../components/common_blocks/header/header';

const Directory = () => {
  const staff = useSelector(state => state.staff);
  const repos = useSelector(state => state.repos);
  const router = useRouter();

  const { name } = router.query;

  const staffList = arr => {
    return arr.map(item => <div key={`staff_${item}`}>{item}</div>);
  };

  return (
    <section className="directory">
      <Header current={name} repos={repos} />
      {staffList(staff)}
    </section>
  );
};

Directory.getInitialProps = async ({ reduxStore, query }) => {
  const { name } = query;

  const { dispatch } = reduxStore;
  await dispatch(getStaff(name));
  await dispatch(getRepos());
  return { platform: 'desktop' };
};

export default Directory;
