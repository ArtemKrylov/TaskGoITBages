import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader';

const SharedLayout = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
