import React, { useState } from "react";
import Link from "next/link";
import ButtonComponent from "./ButtonComponent";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";

type BlogCardProps = {
  blog: {
    id: string;
    title: string;
    content: string;
  };
  onDelete: (id: string) => void; // Function to handle delete
};

const BlogCard: React.FC<BlogCardProps> = ({ blog, onDelete }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    onDelete(blog.id); // Trigger the delete function
    setIsDialogOpen(false);
  };

  const handleCancel = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="mb-4 p-4 border rounded shadow">
      <h2 className="text-xl font-bold">{blog.title}</h2>
      <p>{blog.content.slice(0, 100)}...</p>
      <div className="flex space-x-4 mt-2">
        <Link href={`/${blog.id}`} className="text-blue-500">
          Read More
        </Link>
        <ButtonComponent
          label="Delete"
          variant="danger"
          onClick={handleDeleteClick}
        />
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-white p-6 rounded-lg shadow-lg">
          <DialogHeader>
            <h2 className="text-xl font-semibold">Confirm Delete</h2>
          </DialogHeader>
          <p className="mt-2">Are you sure you want to delete this blog?</p>
          <DialogFooter className="mt-4">
            <ButtonComponent
              label="Cancel"
              variant="primary"
              onClick={handleCancel}
            />
            <ButtonComponent
              label="Confirm"
              variant="danger"
              onClick={handleConfirmDelete}
            />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BlogCard;
