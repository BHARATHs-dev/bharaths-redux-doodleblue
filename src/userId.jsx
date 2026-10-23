
import { useParams } from 'react-router';

const UserId = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>User Details</h1>
      <p>User ID: {id}</p>
    </div>
  );
};

export default UserId;
