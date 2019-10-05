import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getStaff } from '../store/actions';

const Directory = () => {
  const staff = useSelector(state => state.staff);
  const router = useRouter();

  const { name } = router.query;

  const staffList = arr => {
    return arr.map(item => <div key={`staff_${item}`}>{item}</div>);
  };

  return (
    <div className="directory">
      <h1>{name}</h1>
      {staffList(staff)}
    </div>
  );
};

Directory.getInitialProps = async ({ reduxStore, query }) => {
  const { name } = query;

  const { dispatch } = reduxStore;
  await dispatch(getStaff(name));
  return {};
};

export default Directory;
