// src/app/example/page.js

import React from 'react';

async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();
  return data;
}

export default async function ExamplePage() {
  const data = await fetchData();

  return (
    <div>
      <h1>Server Side Rendered Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export async function generateStaticParams() {
  return [];
}
