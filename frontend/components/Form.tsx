import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import ButtonComponent from "./ButtonComponent";

type FormProps = {
  onSubmit: (title: string, content: string) => void;
  initialTitle?: string;
  initialContent?: string;
  buttonLabel: string;
};

const Form: React.FC<FormProps> = ({
  onSubmit,
  initialTitle = "",
  initialContent = "",
  buttonLabel,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const router = useRouter();

  // Update state when props change
  useEffect(() => {
    setTitle(initialTitle);
    setContent(initialContent);
  }, [initialTitle, initialContent]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (title && content) {
      onSubmit(title, content);
    }
  };

  const handleCancel = () => {
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-gray-700">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="content" className="block text-gray-700">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
          rows={10}
          required
        />
      </div>
      <div className="flex justify-end space-x-4">
      <ButtonComponent type="submit" label={buttonLabel} variant="primary" />
      <ButtonComponent
        type="button"
        label="Cancel"
        variant="secondary"
        onClick={handleCancel}
      />
      </div>
    </form>
  );
};

export default Form;