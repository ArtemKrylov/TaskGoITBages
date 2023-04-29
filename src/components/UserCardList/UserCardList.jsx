import React, { useEffect, useState } from 'react';
import { mockapiTest_API } from 'API/mockapiTest_API';

import ListSkeleton from 'components/ListSkeleton/ListSkeleton';
import UserCard from 'components/UserCard';
import { UserCardListStyled } from './UserCardList.styled';
import FilterUserCards from 'components/FilterUserCards/FilterUserCards';
import { FILTER_OPTIONS } from 'utils/constants/filterOptions';

//TODO add filtration, pagination

const UserCardList = () => {
  const followingUsers = localStorage.getItem('following');

  const [users, setUsers] = useState([]);
  const [displayedUsers, setDisplayedUsers] = useState(users);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [filter, setFilter] = useState(FILTER_OPTIONS.all);
  const cardsPerPage = 9;

  function onLoadMoreBtnClick(event) {
    event.preventDefault();
    setCurrentPage(prev => ++prev);
  }

  function onFilterChange(newFilter) {
    setFilter(FILTER_OPTIONS[newFilter] ?? FILTER_OPTIONS.all);
  }

  function changeDisplayedUsers({ id, action }) {
    //TODO 1. change users - add/delete followers 2.change displayed users
    setUsers(prev =>
      prev.map(user => {
        if (user.id !== id) return user;
        const followers = user.followers;
        if (action === 'follow') user.followers = followers + 1;
        if (action === 'unfollow') user.followers = followers - 1;
        return user;
      })
    );

    setDisplayedUsers(prev =>
      prev.filter(displayedUser => displayedUser.id !== id)
    );
  }

  useEffect(() => {
    const getUsers = async () => {
      setIsLoading(true);
      const response = await mockapiTest_API.getAllUsers();
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

  useEffect(() => {
    function filterAndPaginateUsers(users, currentPage, filter) {
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

      const paginatedFilterdUsers =
        filteredUsers.length > cardsPerPage
          ? filteredUsers.slice(0, cardsPerPage + cardsPerPage * currentPage)
          : filteredUsers;
      setDisplayedUsers(paginatedFilterdUsers);
    }
    filterAndPaginateUsers(users, currentPage, filter);
  }, [currentPage, filter, followingUsers, users]);

  if (isLoading) return <ListSkeleton />;
  if (!isLoading && displayedUsers.length === 0)
    return (
      <div>
        <FilterUserCards
          onFilterChange={onFilterChange}
          selectedFilter={filter}
        />
        No users
      </div>
    );
  if (!isLoading && displayedUsers.length > 0) {
    return (
      <UserCardListStyled className="userCardList">
        <FilterUserCards
          onFilterChange={onFilterChange}
          selectedFilter={filter}
        />
        {displayedUsers.map(user => (
          <UserCard
            user={user}
            changeDisplayedUsers={changeDisplayedUsers}
            key={user.id}
          />
        ))}
        {displayedUsers.length > cardsPerPage && (
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
  }
};

export default UserCardList;
