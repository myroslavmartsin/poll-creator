import { format } from 'date-fns';
import { Poll } from '../../../../models/poll.models';
import { NavLink } from 'react-router-dom';

import './PollList.css';

interface PollListProps {
  list: Poll[];
}

const PollList: React.FC<PollListProps> = ({ list = [] }) => {
  const renderList = () => {
    return list.map((poll: Poll, index: number) => {
      const date: string = format(poll.createdAt, 'MM/dd/yyyy');

      return (
        <NavLink
          key={index}
          className={({ isActive }) => `poll-list-item ${isActive ? 'active' : ''}`}
          to={`/view-polls/${poll.id}`}>
          <span className="poll-list-item-question">{poll.question}</span>

          <span className="poll-list-item-creation-date">{date}</span>
        </NavLink>
      );
    });
  };

  return (
    <div className="poll-list">
      {list.length > 0 ? renderList() : <span className="text-gray">No polls found</span>}
    </div>
  );
};

export default PollList;
