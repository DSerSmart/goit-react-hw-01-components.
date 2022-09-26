import { Profile } from './Profile/Profile';
import user from '../components/Profile/user.json';
import { DataList } from './StatisticsList/DataList';
import data from './Statistics/data.json';
import { Statistics, Title } from './Statistics/Data.styled';
import { FriendList } from './Friend/FriendList/FriendList';
import friends from '../components/Friend/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../components/TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics>
        <Title>Upload stats</Title>
        <DataList data={data} />
      </Statistics>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
