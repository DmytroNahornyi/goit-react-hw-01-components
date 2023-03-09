import styled from 'styled-components';

export const FriendListWrap = styled.ul`
  max-width: 300px;
  margin: 50px auto 0 auto;
  padding: 0;
`;

export const FriendItemStyle = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 20px;

  border-radius: 20px;
  background-color: #fff;
  box-shadow: 10px 10px 20px #969696;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const IsOnline = styled.span`
  flex-shrink: 0;
  width: 15px;
  height: 15px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 48px;
  margin-right: 10px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
