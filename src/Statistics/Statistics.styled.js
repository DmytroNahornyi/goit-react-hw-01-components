import styled from 'styled-components';

export const StatisticsSection = styled.section`
  width: 300px;
  margin: 0 auto;
  margin-top: 50px;
  background-color: #fff;
  overflow: hidden;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 10px 10px 20px #969696;
`;

export const StatisticsTitel = styled.h2`
  padding: 0;
  text-align: center;
  color: grey;
`;

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;
`;

export const StatisticsItemStyle = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 20%;
  background-color: ${({ backgrounds }) => backgrounds};

  padding: 10px 0;
  font-weight: 500;
`;
