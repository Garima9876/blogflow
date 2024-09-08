"use client";

import { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';

interface Blog {
  id: number;
  title: string;
  content: string;
}

export default function HomePage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  // Fetch blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:3001/blogs');
        const data: Blog[] = await response.json();
        setBlogs(data);
      } catch (err) {
        console.error('Failed to fetch blogs', err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <main className="container mx-auto py-8">
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <BlogCard key={String(blog.id)} blog={blog} />
        ))
      ) : (
        <p>No blogs available.</p>
      )}
    </main>
  );
}