import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { BackButtonStyled } from './BackButton.styled';

const BackButton = ({ navigateTo }) => {
  const navigate = useNavigate();
  const onBackButtonClick = event => {
    event.preventDefault();
    navigate(navigateTo);
  };
  return (
    <BackButtonStyled
      type="button"
      className="backButton"
      title="Back to homepage"
      onClick={onBackButtonClick}
      ariaLabel="return to homepage"
    >
      <RiArrowGoBackLine />
      <span className="backButton__text">Back</span>
    </BackButtonStyled>
  );
};
BackButton.propTypes = {
  navigateTo: PropTypes.string.isRequired,
};

export default BackButton;
