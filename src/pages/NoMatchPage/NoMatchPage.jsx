import React from 'react';
import { Navigate } from 'react-router-dom';

const NoMatchPage = () => {
  return <Navigate to={'/'} />;
};

export default NoMatchPage;
