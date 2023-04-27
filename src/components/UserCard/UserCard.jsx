import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { UserCardStyled } from './UserCard.styled';
import { mockapiTest_API } from 'API/mockapiTest_API';

const UserCard = ({ user: { tweets, followers, user, avatar, id } }) => {
  const storedFollowings = localStorage.getItem('following') ?? [];
  const isIdStored = storedFollowings.indexOf(id) !== -1;
  const [isFollowed, setIsFollowed] = useState(isIdStored);
  const [followersNumber, setFollowersNumber] = useState(followers);

  const onFollowButtonClick = async event => {
    event.preventDefault();
    //Follow
    if (!isFollowed) {
      setIsFollowed(true);

      try {
        await mockapiTest_API.editUser(id, {
          tweets,
          user,
          avatar,
          id,
          followers: followersNumber + 1,
        });
      } catch (error) {
        console.log(error);
      }
      setFollowersNumber(prev => ++prev);
      localStorage.setItem('following', [...storedFollowings, id]);
    }

    //Unfollow
    if (isFollowed) {
      setIsFollowed(false);
      try {
        await mockapiTest_API.editUser(id, {
          tweets,
          user,
          avatar,
          id,
          followers: followersNumber - 1,
        });
      } catch (error) {
        console.log(error);
      }
      setFollowersNumber(prev => --prev);
      localStorage.setItem(
        'following',
        storedFollowings.filter(el => el !== id)
      );
    }
  };

  return (
    <UserCardStyled className="userCard">
      {user}
      <p className="userCard__tweets"></p>
      <p className="userCard__followers">{followersNumber}</p>
      <button
        type="button"
        title="add user to followings"
        className="userCard__followButton"
        onClick={onFollowButtonClick}
      >
        {isFollowed ? 'Following' : 'Follow'}
      </button>
    </UserCardStyled>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserCard;
