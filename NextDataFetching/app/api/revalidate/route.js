// src/app/api/revalidate/route.js

import { NextResponse } from 'next/server';


export async function GET(req, res) {
  const secret = req.nextUrl.searchParams.get('secret');

  if (secret !== process.env.MY_SECRET_TOKEN) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    const path = req.nextUrl.searchParams.get('path') || '/example';
    // Ensure the revalidate method is called correctly
    await res.revalidate(path);
    return NextResponse.json({ revalidated: true });
  } catch (err) {
    console.error('Revalidation error:', err);  // Enhanced logging for debugging
    return NextResponse.json({ message: 'Error revalidating', error: err.message }, { status: 500 });
  }
}
