import React, { useState, useEffect } from 'react';

type FormProps = {
  onSubmit: (title: string, content: string) => void;
  initialTitle?: string;
  initialContent?: string;
};

const Form: React.FC<FormProps> = ({ onSubmit, initialTitle = '', initialContent = '' }) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

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

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-gray-700">Title</label>
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
        <label htmlFor="content" className="block text-gray-700">Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
          rows={10}
          required
        />
      </div>
      <button 
        type="submit" 
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Update
      </button>
    </form>
  );
};

export default Form;