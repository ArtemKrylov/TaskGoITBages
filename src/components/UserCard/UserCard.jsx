import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { UserCardStyled } from './UserCard.styled';
import { mockapiTest_API } from 'API/mockapiTest_API';

const UserCard = ({
  user: { tweets, followers, user, avatar, id },
  changeDisplayedUsers,
}) => {
  const storedFollowings = JSON.parse(
    localStorage.getItem('following') ?? '[]'
  );
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

      localStorage.setItem(
        'following',
        JSON.stringify([
          ...JSON.parse(localStorage.getItem('following') ?? '[]'),
          id,
        ])
      );
      changeDisplayedUsers({ id, action: 'follow' });
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
        JSON.stringify(
          JSON.parse(localStorage.getItem('following') ?? '[]').filter(
            el => el !== id
          )
        )
      );
      changeDisplayedUsers({ id, action: 'unfollow' });
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
  changeDisplayedUsers: PropTypes.func.isRequired,
};

export default UserCard;
