"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Form from '../../components/Form';

export default function CreatePage() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (title: string, content: string) => {
    try {
      const response = await fetch('http://localhost:3001/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });

      if (!response.ok) {
        throw new Error('Failed to create blog');
      }

      setSuccess(true);
      setError(null);
      setTimeout(() => {
        router.push('/');
      }, 1000);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
      setSuccess(false);
    }
  };

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Create New Blog</h1>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">Blog created successfully! Redirecting...</p>}
      <Form onSubmit={handleSubmit} buttonLabel="Create" />
    </main>
  );
}