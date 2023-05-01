import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { UserCardStyled } from './UserCard.styled';
import { mockapiTest_API } from 'API/mockapiTest_API';
import userDefaultAvatar2x from '../../data/img/userDefaultAvatar2x.png';
import { Button } from 'components/GlobalStyle';
import { theme } from 'utils/constants/theme';

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
  const followButtonRef = useRef();

  //if no avatar image from backend - use default avatar image
  if (!avatar || avatar.length === 0) {
    avatar = userDefaultAvatar2x;
  }

  async function onFollowButtonClick(event) {
    event.preventDefault();
    //!Follow
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

      //changing followed user card button bgcolor
      followButtonRef.current.style.backgroundColor = theme.colors.accent;

      //saving followed user id to localstorage
      localStorage.setItem(
        'following',
        JSON.stringify([
          ...JSON.parse(localStorage.getItem('following') ?? '[]'),
          id,
        ])
      );
      changeDisplayedUsers({ id, action: 'follow' });
    }

    //!Unfollow
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

      //changing unfollowed user card button bgcolor
      followButtonRef.current.style.backgroundColor = theme.colors.white;

      //deleting unfollowed user id from localstorage
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
  }

  useEffect(() => {
    if (isFollowed) {
      followButtonRef.current.style.backgroundColor = theme.colors.accent;
    }
  }, [isFollowed]);

  return (
    <UserCardStyled className="userCard">
      <div className="userCard__frame" alt="frame around avatar">
        <img
          src={avatar}
          className="userCard__avatar"
          alt="user avatar"
          fetchpriority="high"
          width={63}
        />
      </div>

      <p className="userCard__tweets">{transformNumber(tweets)} tweets</p>
      <p className="userCard__followers">
        {transformNumber(followersNumber)} followers
      </p>
      <Button
        type="button"
        title="add/remove user to/from followings"
        className="userCard__followButton"
        onClick={onFollowButtonClick}
        ref={followButtonRef}
        ariaLabel="follow or unfollow if followed the user"
      >
        {isFollowed ? 'Following' : 'Follow'}
      </Button>
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

function transformNumber(number) {
  const stringNumber = String(number);
  return number > 1000
    ? `${stringNumber.slice(0, stringNumber.length - 3)},${stringNumber.slice(
        -3
      )}`
    : `${stringNumber.slice(-3)}`;
}
