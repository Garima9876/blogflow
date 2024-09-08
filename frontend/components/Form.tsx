import { useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

export default function Form({ onSubmit, initialData = { title: '', content: '' } }) {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title">Title</label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="content">Content</label>
        <Textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
        />
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
}