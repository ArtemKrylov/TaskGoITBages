import React from 'react';
import { HomePageStyled } from './HomePage.styled';
import { Button } from 'components/GlobalStyle';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  function onTweetsNavigateBtnClick(event) {
    navigate('/tweets');
  }
  return (
    <HomePageStyled className="homePage">
      <h1 className="homePage__mainTitle">Welcome to the Tweeter App!</h1>
      <Button
        type="button"
        className="tweetsNavigateBtn"
        aria-label="go to tweets page"
        onClick={onTweetsNavigateBtnClick}
      >
        Watch tweets
      </Button>
    </HomePageStyled>
  );
};

export default HomePage;
