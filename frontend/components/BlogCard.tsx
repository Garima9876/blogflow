import Link from "next/link";

type BlogCardProps = {
  blog: {
    id: number;
    title: string;
    content: string;
  };
};

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="mb-4 p-4 border rounded shadow">
      <h2 className="text-xl font-bold">{blog.title}</h2>
      <p className="mt-2">
        {blog.content.length > 160
          ? `${blog.content.slice(0, 160)}...`
          : blog.content}
      </p>
      <div className="flex space-x-4 mt-2">
        <Link href={`/blog/${blog.id}`} className="text-blue-500">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
