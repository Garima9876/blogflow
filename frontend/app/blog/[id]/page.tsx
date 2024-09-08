"use client";

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function BlogPage({ params }: { params: { id: string } }) {
  const [blog, setBlog] = useState<{ title: string; content: string } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { id } = params;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:3001/blogs/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch blog');
        }
        const data = await response.json();
        setBlog(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchBlog();
  }, [id]);

  return (
    <main className="container mx-auto py-8">
      {error && <p className="text-red-500">{error}</p>}
      {blog ? (
        <>
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <p>{blog.content}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}