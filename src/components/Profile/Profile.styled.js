import styled from 'styled-components';

export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin: 50px auto 0 auto;
  /* padding-top: 20px; */
  overflow: hidden;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 10px 10px 20px #969696;
`;

export const Avatar = styled.img`
  width: 150px;
  border-radius: 50%;
  /* padding: 20px; */
  margin-top: 40px;
`;

export const ProfileTitle = styled.h2`
  font-size: 20px;
  text-align: center;
`;

export const ProfileDescr = styled.p`
  margin-top: 15px;
  color: grey;
  text-align: center;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #f0f0f0;
  padding: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px;
  border-top: 2px solid #d9d9d9;
  width: 33%;

  &:not(:last-child) {
    border-right: 2px solid #d9d9d9;
  }

  span:not(:last-child) {
    margin-bottom: 5px;
  }
`;
export const StatsInfo = styled.span`
  font-weight: bold;
`;
