import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypesSelector } from '../hooks/useTypeSelector';

const UserList: React.FC = () => {
  const { users, error, loading } = useTypesSelector((state) => state.user);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>An error occurred while loading the users</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
