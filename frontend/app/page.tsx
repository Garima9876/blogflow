"use client";

import { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';

export default function HomePage() {
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:3001/blogs');
        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        console.error('Failed to fetch blogs', err);
      }
    };

    fetchBlogs();
  }, []);

  // Delete blog
  const deleteBlog = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3001/blogs/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Remove the deleted blog from the state
        setBlogs(blogs.filter((blog) => blog.id !== id));
      } else {
        console.error('Failed to delete blog');
      }
    } catch (err) {
      console.error('Error deleting blog:', err);
    }
  };

  return (
    <main className="container mx-auto py-8">
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} onDelete={deleteBlog} />
        ))
      ) : (
        <p>No blogs available.</p>
      )}
    </main>
  );
}