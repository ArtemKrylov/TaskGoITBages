import React, { useEffect, useState } from 'react';

import BackButton from 'components/BackButton';
import UserCardList from 'components/UserCardList';
import { Button } from 'components/GlobalStyle';
import FilterUserCards from 'components/FilterUserCards/FilterUserCards';
import { FILTER_OPTIONS } from 'utils/constants/filterOptions';
import { mockapiTest_API } from 'API/mockapiTest_API';
import { TweetsPageStyled } from './TweetsPage.styled';

const TweetsPage = () => {
  const followingUsers = localStorage.getItem('following');

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState(FILTER_OPTIONS.all);
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 9;
  let displayedUsers =
    filteredUsers.length > cardsPerPage
      ? filteredUsers.slice(0, cardsPerPage + cardsPerPage * currentPage)
      : filteredUsers;

  function onFilterChange(newFilter) {
    setFilter(FILTER_OPTIONS[newFilter] ?? FILTER_OPTIONS.all);
  }

  function onLoadMoreBtnClick(event) {
    event.preventDefault();
    setCurrentPage(prev => ++prev);
  }

  function changeDisplayedUsers({ id, action }) {
    setUsers(prev =>
      prev.map(user => {
        if (user.id !== id) return user;
        const followers = user.followers;
        if (action === 'follow') user.followers = followers + 1;
        if (action === 'unfollow') user.followers = followers - 1;
        return user;
      })
    );

    displayedUsers = displayedUsers.filter(
      displayedUser => displayedUser.id !== id
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
    switch (filter) {
      case FILTER_OPTIONS.follow:
        setFilteredUsers(
          users.filter(user => followingUsers.indexOf(user.id) === -1)
        );
        break;
      case FILTER_OPTIONS.followings:
        setFilteredUsers(
          users.filter(user => followingUsers.indexOf(user.id) !== -1)
        );
        break;
      case FILTER_OPTIONS.all:
        setFilteredUsers(users);
        break;
      default:
        throw new Error('Wrong filter option!');
    }
  }, [filter, followingUsers, users]);

  return (
    <TweetsPageStyled className="tweetsPage">
      <BackButton navigateTo="/" />
      <FilterUserCards
        onFilterChange={onFilterChange}
        selectedFilter={filter}
      />
      <UserCardList
        displayedUsers={displayedUsers}
        changeDisplayedUsers={changeDisplayedUsers}
        isLoading={isLoading}
      />
      {filteredUsers.length > cardsPerPage &&
        displayedUsers.length !== filteredUsers.length && (
          <Button
            type="button"
            className="useCardList__loadMoreBtn"
            onClick={onLoadMoreBtnClick}
            ariaLabel="load more tweets"
          >
            Load more
          </Button>
        )}
    </TweetsPageStyled>
  );
};

export default TweetsPage;
