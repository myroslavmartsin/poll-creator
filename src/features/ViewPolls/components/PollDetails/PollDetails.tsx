import { Params, useNavigate, useParams } from 'react-router-dom';
import { useDeletePollMutation, useGetPollQuery } from '../../../../store/apiSlice';
import { PrimaryButton } from '../../../../components/buttons/PrimaryButton/PrimaryButton';

import './PollDetails.css';

import { toast } from 'react-toastify';
import { useCallback, useEffect } from 'react';

const PollList: React.FC = () => {
  const { id } = useParams<Params>();

  const navigate = useNavigate();

  const {
    data: poll,
    isLoading,
    error
  } = useGetPollQuery(id!, { refetchOnMountOrArgChange: true });

  const [deletePoll, { isLoading: isDeleting }] = useDeletePollMutation();

  useEffect(() => {
    if (!isLoading && error) {
      navigate('/view-polls');
    }
  }, [isLoading, error]);

  const handleDelete = useCallback(async () => {
    try {
      await deletePoll(poll!.id).unwrap();

      navigate('/view-polls');

      toast('Poll deleted successfully!');
    } catch (err) {
      console.error('Failed to delete poll:', err);
    }
  }, [poll]);

  const renderOptions = () => {
    return poll?.options.map((option: string, index: number) => {
      return <li key={index}>{option}</li>;
    });
  };

  return (
    <>
      {poll && (
        <div className="poll-details">
          <h4 className="poll-details-question">{poll?.question}</h4>

          <span className="text-gray">Options:</span>

          <ul>{renderOptions()}</ul>

          <div className="flex justify-end mt-5">
            <PrimaryButton onClick={handleDelete} loading={isDeleting}>
              {isDeleting ? 'Deleting...' : 'Delete'}
            </PrimaryButton>
          </div>
        </div>
      )}
    </>
  );
};

export default PollList;
