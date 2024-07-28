import React, { useEffect, useState } from 'react';


function FetchData() {
  const [message, setMessage] = useState<string>('');


  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('/api/hello');

        const data = await response.json();

        setMessage(data.message);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, []);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

export default FetchData;