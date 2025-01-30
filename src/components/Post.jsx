import { useState } from 'react';

function Post({ post, onLike, onComment }) {
  const [commentText, setCommentText] = useState('');
  const { author, content, likes, comments, timestamp } = post;
  
  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      onComment(post.id, commentText);
      setCommentText('');
    }
  };

  return (
    <article className="post-card">
      <header className="flex items-start gap-4 mb-4">
        <img 
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${author.name}`}
          alt={author.name} 
          className="avatar"
        />
        <div>
          <h3 className="font-semibold text-lg">{author.name}</h3>
          <time className="text-sm text-gray-500">
            {new Date(timestamp).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
      </header>
      
      <p className="text-gray-800 mb-4">{content}</p>
      
      <div className="flex items-center gap-6 py-3 border-t border-b border-gray-100">
        <button 
          onClick={() => onLike(post.id)}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors"
        >
          <span>❤️</span>
          <span className="font-medium">{likes} Likes</span>
        </button>
        <span className="flex items-center gap-2 text-gray-500">
          <span>💬</span>
          {comments.length} Comments
        </span>
      </div>

      <div className="mt-4 space-y-3">
        {comments.map(comment => (
          <div key={comment.id} className="bg-gray-50 rounded-lg p-3">
            <span className="font-medium">{comment.author}</span>
            <span className="mx-2 text-gray-300">·</span>
            <span className="text-gray-600">{comment.text}</span>
          </div>
        ))}
      </div>
        
      <form onSubmit={handleSubmitComment} className="mt-4 flex gap-2">
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Write a comment..."
          className="input-field"
        />
        <button type="submit" className="btn-primary">
          Comment
        </button>
      </form>
    </article>
  );
}

export default Post; 