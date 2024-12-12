import { useGetPollsQuery } from '../../store/apiSlice';
import PollList from './components/PollList/PollList';
import { Outlet } from 'react-router-dom';

import './ViewPolls.css';

const ViewPolls: React.FC<any> = () => {
  const { data: polls = [], isLoading } = useGetPollsQuery(undefined, {
    refetchOnMountOrArgChange: true
  });

  return (
    <div className="grid flex-1 p-10 polls-container">
      {isLoading ? <span className="text-gray">Loading...</span> : <PollList list={polls} />}

      <Outlet />
    </div>
  );
};

export default ViewPolls;
