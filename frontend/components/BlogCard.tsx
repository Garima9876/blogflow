import Link from "next/link";
import { Card, CardHeader, CardBody } from "@/components/ui/card";

export default function BlogCard({ id, title, content }) {
  return (
    <Card className="mb-4">
      <CardHeader>
        <h2 className="text-xl font-bold">{title}</h2>
      </CardHeader>
      <CardBody>
        <p>{content.slice(0, 100)}...</p>
        <Link href={`/${id}`} className="text-blue-500">
          Read More
        </Link>
      </CardBody>
    </Card>
  );
}