import React, { useState } from 'react';
import axios from 'axios';

export const CommentCreate = ({ postId }) => {
  // HOOKS
  const [comment, setComment] = useState('');

  // HANDLERS
  const onSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post(`http://posts.com/posts/${postId}/comments`, {
        comment,
      })
      .then(setComment(''));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>New comment</label>
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className='form-control'
          />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
