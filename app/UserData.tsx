
import React, { useEffect, useState } from 'react';

function UserData() {
  const [user, setUser] = useState<{ id: string; name: string } | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/users/123');
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      {user ? (
        <p>ID: {user.id}, Name: {user.name}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserData;
