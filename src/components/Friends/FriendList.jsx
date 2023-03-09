import PropTypes from 'prop-types';
import { FriendListWrap, FriendItemStyle, Avatar, Name, IsOnline } from './Friend.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListWrap>
      {friends.map(friend => (
        <FriendItem key={friend.id} {...friend} />
      ))}
    </FriendListWrap>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItemStyle>
      <IsOnline isOnline={isOnline} />
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendItemStyle>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
