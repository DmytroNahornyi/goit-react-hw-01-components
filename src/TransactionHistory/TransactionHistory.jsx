import {
  TransactionHistoryTable,
  TransactionHistoryTbody,
} from './TransactionHistory.styled';
import { TransactionItem } from './TransactionItem.jsx';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionHistoryTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <TransactionHistoryTbody>
        <TransactionItem items={transactions} />
      </TransactionHistoryTbody>
    </TransactionHistoryTable>
  );
};
