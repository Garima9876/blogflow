"use client";

import { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';

export default function HomePage() {
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:3001/blogs');
        const data = await response.json();
        setblogs(data);
      } catch (err) {
        console.error('Failed to fetch blogs', err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <main className="container mx-auto py-8">
      {blogs.length > 0 ? (
        blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
      ) : (
        <p>Sorry No blog blogs available</p>
      )}
    </main>
  );
}