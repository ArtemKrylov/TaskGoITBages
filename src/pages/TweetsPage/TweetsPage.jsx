import React from 'react';
import { Container } from 'components/App/App.styled';
import BackButton from 'components/BackButton';
import UserCardList from 'components/UserCardList';

const TweetsPage = () => {
  return (
    <Container>
      TweetsPage
      <BackButton navigateTo="/" />
      <UserCardList />
    </Container>
  );
};

export default TweetsPage;
