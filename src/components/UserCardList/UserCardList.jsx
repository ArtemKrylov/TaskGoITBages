import React, { useEffect, useState } from 'react';
import { mockapiTest_API } from 'API/mockapiTest_API';

import ListSkeleton from 'components/ListSkeleton/ListSkeleton';
import UserCard from 'components/UserCard';
import { UserCardListStyled } from './UserCardList.styled';
import FilterUserCards from 'components/FilterUserCards/FilterUserCards';

//TODO add filtration, pagination

const UserCardList = () => {
  const FILTER_OPTIONS = Object.freeze({
    all: 'all',
    follow: 'follow',
    followings: 'followings',
  });
  const followingUsers = localStorage.getItem('following');
  console.log('followingUsers: ', followingUsers);

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [filter, setFilter] = useState(FILTER_OPTIONS.all);
  const cardsPerPage = 9;

  let filteredUsers = users;
  if (filter === FILTER_OPTIONS.follow) {
    filteredUsers = users.filter(
      user => followingUsers.indexOf(user.id) === -1
    );
  }
  if (filter === FILTER_OPTIONS.followings) {
    filteredUsers = users.filter(
      user => followingUsers.indexOf(user.id) !== -1
    );
  }

  const paginatedUsers = filteredUsers.slice(
    0,
    cardsPerPage + cardsPerPage * currentPage
  );

  function onLoadMoreBtnClick(event) {
    event.preventDefault();
    setCurrentPage(prev => ++prev);
  }
  console.log('paginatedUsers: ', paginatedUsers);

  function onFilterChange(newFilter) {
    setFilter(FILTER_OPTIONS[newFilter] ?? FILTER_OPTIONS.all);
  }

  useEffect(() => {
    const getUsers = async () => {
      setIsLoading(true);
      const response = await mockapiTest_API.getAllUsers();
      console.log('response: ', response);
      setUsers(response);
      setIsLoading(false);
      return response;
    };
    try {
      getUsers();
    } catch (error) {
      console.log(error);
    }
  }, []);

  //!TODO pagination

  if (isLoading) return <ListSkeleton />;
  if (!isLoading && users.length === 0) return <div>No users</div>;
  if (!isLoading && users.length > 0)
    return (
      <UserCardListStyled className="userCardList">
        <FilterUserCards onFilterChange={onFilterChange} />
        {paginatedUsers.map(user => (
          <UserCard user={user} key={user.id} />
        ))}
        {users.length > cardsPerPage && (
          <button
            type="button"
            className="useCardList__loadMoreBtn"
            onClick={onLoadMoreBtnClick}
          >
            Load more
          </button>
        )}
      </UserCardListStyled>
    );
};

export default UserCardList;
