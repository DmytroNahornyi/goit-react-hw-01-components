import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  background-color: red;

  width: 300px;
  margin: 50px auto 50px auto;
  padding: 0;
  border-radius: 20px;
  border-collapse: collapse;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 10px 10px 20px #969696;

  thead {
    border-radius: 50%;
    background-color: #00b5ff;
    color: #fff;
  }

  th {
    padding: 10px 0;
  }
  th:not(:last-child) {
    border-right: solid 2px #e0e0e0;
  }
`;

export const TransactionHistoryTbody = styled.tbody`
  tr:nth-child(even) {
    background-color: #f4f4f4;
  }

  td {
    padding: 10px 15px;
    text-align: center;
    border: 1px solid #e0e0e0;
  }
`;
