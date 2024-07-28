import React, { useEffect, useState } from 'react';

function PostData() {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const postData = async () => {
      try {
        const response = await fetch('/api/greet', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: '小明' })
        });
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error('Error posting data:', error);
      }
    };

    postData();

  }, []);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

export default PostData;