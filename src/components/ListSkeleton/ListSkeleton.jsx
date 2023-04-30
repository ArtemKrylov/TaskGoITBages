import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { theme } from 'utils/constants/theme';

const ListSkeleton = ({ count = 5 }) => {
  return (
    <SkeletonTheme
      baseColor={`${theme.colors.accent2}`}
      highlightColor={`${theme.colors.accent}`}
    >
      <p>
        <Skeleton count={count} />
      </p>
    </SkeletonTheme>
  );
};

export default ListSkeleton;
