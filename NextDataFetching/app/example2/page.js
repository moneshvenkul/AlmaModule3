"use client"

import React, { useState, useEffect } from 'react';

const ClientSideFetching = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {

        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result); // Log the response to check its structure
        setData(result);
      
        setLoading(false);
      }
    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render.

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Fetched Data:</h1>
      {data ? (
        <ul>
          <li>User ID: {data.userId}</li>
          <li>ID: {data.id}</li>
          <li>Title: {data.title}</li>
          <li>Completed: {data.completed ? 'Yes' : 'No'}</li>
        </ul>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default ClientSideFetching;
