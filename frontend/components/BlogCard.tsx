import React from "react";
import Link from "next/link";
import ButtonComponent from "./ButtonComponent";

type BlogCardProps = {
  blog: {
    id: string;
    title: string;
    content: string;
  };
  onDelete: (id: string) => void;
};

const BlogCard: React.FC<BlogCardProps> = ({ blog, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete(blog.id);
  };

  return (
    <div className="mb-4 p-4 border rounded shadow">
      <h2 className="text-xl font-bold">{blog.title}</h2>
      <p>{blog.content.slice(0, 100)}...</p>
      <div className="flex space-x-4 mt-2">
        <Link href={`/${blog.id}`} className="text-blue-500">
          Read More
        </Link>
        <Link href={`/edit/${blog.id}`} className="text-blue-500">
          <ButtonComponent label="Edit" variant="primary" />
        </Link>
        <ButtonComponent
          label="Delete"
          variant="danger"
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  );
};

export default BlogCard;