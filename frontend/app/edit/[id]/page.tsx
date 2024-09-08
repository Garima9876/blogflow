"use client";

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Form from '../../../components/Form';

export default function EditBlogPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { id } = params;
  const [blog, setBlog] = useState({ title: '', content: '' });

  useEffect(() => {
    if (id) {
      const fetchBlog = async () => {
        try {
          const response = await fetch(`http://localhost:3001/blogs/${id}`);
          const data = await response.json();
          setBlog(data);
        } catch (err) {
          console.error('Failed to fetch blog', err);
        }
      };

      fetchBlog();
    }
  }, [id]);

  const handleUpdateBlog = async (title: string, content: string) => {
    try {
      const response = await fetch(`http://localhost:3001/blogs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        router.push('/');
      } else {
        console.error('Failed to update blog');
      }
    } catch (err) {
      console.error('Error updating blog:', err);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Edit the Blog</h1>
      <Form
        onSubmit={handleUpdateBlog}
        initialTitle={blog.title}
        initialContent={blog.content}
        buttonLabel="Update"
      />
    </div>
  );
}