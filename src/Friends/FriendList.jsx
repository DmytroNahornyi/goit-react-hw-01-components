import { FriendListWrap } from './Friend.styled';
import { FriendItem } from './FriendItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendListWrap>
      <FriendItem friends={friends} />
    </FriendListWrap>
  );
};
