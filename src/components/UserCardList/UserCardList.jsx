import React from 'react';
import PropTypes from 'prop-types';

import ListSkeleton from 'components/ListSkeleton/ListSkeleton';
import UserCard from 'components/UserCard';
import {
  UserCardListNoUsersStyled,
  UserCardListStyled,
} from './UserCardList.styled';

const UserCardList = ({ displayedUsers, changeDisplayedUsers, isLoading }) => {
  if (isLoading) return <ListSkeleton />;
  if (!isLoading && displayedUsers.length === 0)
    return (
      <UserCardListNoUsersStyled className="userCardList--noUsers">
        No users 🔍🫡
      </UserCardListNoUsersStyled>
    );

  if (!isLoading && displayedUsers.length > 0) {
    return (
      <UserCardListStyled className="userCardList">
        {displayedUsers.map(user => (
          <UserCard
            user={user}
            changeDisplayedUsers={changeDisplayedUsers}
            key={user.id}
          />
        ))}
      </UserCardListStyled>
    );
  }
};

UserCardList.propTypes = {
  displayedUsers: PropTypes.array.isRequired,
  changeDisplayedUsers: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default UserCardList;
