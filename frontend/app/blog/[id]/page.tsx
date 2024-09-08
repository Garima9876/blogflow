"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import ButtonComponent from "../../../components/ButtonComponent";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogHeader,
  DialogDescription,
} from "@/components/ui/dialog";

export default function BlogPage({ params }: { params: { id: string } }) {
  const [blog, setBlog] = useState<{ title: string; content: string } | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:3001/blogs/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog");
        }
        const data = await response.json();
        setBlog(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchBlog();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3001/blogs/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete blog");
      }

      router.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="container mx-auto py-8">
      {error && <p className="text-red-500">{error}</p>}
      {blog ? (
        <>
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <p>{blog.content}</p>
          <div className="mt-4 flex space-x-4">
            <ButtonComponent
              label="Edit"
              variant="primary"
              onClick={() => router.push(`/edit/${id}`)}
            />
            <ButtonComponent
              label="Delete"
              variant="danger"
              onClick={() => setShowDialog(true)}
            />
          </div>
          {/* Dialog for confirmation */}
          <Dialog open={showDialog} onOpenChange={() => setShowDialog(false)}>
            <DialogContent className="bg-white p-6 rounded-lg shadow-lg">
              <DialogHeader>
                <DialogHeader className="text-xl font-semibold">
                  <DialogTitle>Confirm Delete</DialogTitle>
                </DialogHeader>
              </DialogHeader>
              <DialogDescription className="mt-2">
                Are you sure you want to delete this blog?
              </DialogDescription>
              <DialogFooter>
                <ButtonComponent
                  type="button"
                  label="Cancel"
                  variant="primary"
                  onClick={() => setShowDialog(false)}
                />
                <ButtonComponent
                  type="submit"
                  label="Delete"
                  variant="danger"
                  onClick={() => {
                    handleDelete();
                    setShowDialog(false);
                  }}
                />
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}
