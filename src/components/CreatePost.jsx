import { useState } from 'react';

function CreatePost({ onCreatePost }) {
  const [content, setContent] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onCreatePost(content);
      setContent('');
    }
  };

  return (
    <div className="post-card">
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          className="input-field mb-4"
          rows="3"
        />
        <div className="flex justify-end">
          <button type="submit" className="btn-primary">
            Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost; 