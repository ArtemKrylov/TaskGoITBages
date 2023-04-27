import React, { useEffect, useState } from 'react';
import { mockapiTest_API } from 'API/mockapiTest_API';

import ListSkeleton from 'components/ListSkeleton/ListSkeleton';
import UserCard from 'components/UserCard';
import { UserCardListStyled } from './UserCardList.styled';

//TODO add filtration, pagination

const UserCardList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const cardsPerPage = 9;

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
        {users.map(user => (
          <UserCard user={user} key={user.id} />
        ))}
      </UserCardListStyled>
    );
};

export default UserCardList;
