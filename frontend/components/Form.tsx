import { useState } from 'react';
import ButtonComponent from './ButtonComponent'; // Import the ButtonComponent

type FormProps = {
  onSubmit: (title: string, content: string) => void;
};

const Form = ({ onSubmit }: FormProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

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
      <ButtonComponent 
        onClick={handleSubmit} 
        label="Create Blog" 
        variant="primary" 
      />
    </form>
  );
};

export default Form;