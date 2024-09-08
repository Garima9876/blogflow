import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function BlogCard({ blog }) {
  return (
    <Card className="mb-4">
      <CardHeader>
        <h2 className="text-xl font-bold">{blog.title}</h2>
      </CardHeader>
      <CardContent>
        <p>{blog.content.slice(0, 100)}...</p>
        <Link href={`/${blog.id}`} className="text-blue-500">
          Read More
        </Link>
      </CardContent>
    </Card>
  );
}