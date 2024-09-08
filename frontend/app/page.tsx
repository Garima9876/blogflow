"use client";

import { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="container mx-auto py-8">
      {posts.length > 0 ? (
        posts.map((post) => <BlogCard key={post.id} {...post} />)
      ) : (
        <p>No blog posts available.</p>
      )}
    </main>
  );
}