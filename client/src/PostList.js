import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

const PostList = () => {
  // HOOKS
  const [posts, setPosts] = useState({});

  // HANDLERS
  const fetchPosts = async () => {
    const res = await axios.get('http://posts.com/posts');

    setPosts(res.data);
  };

  // LIFECYCLES
  useEffect(() => {
    fetchPosts();
  }, []);

  // RENDERS
  const renderPosts = Object.values(posts).map(({ id, title, comments }) => (
    <div
      className='card'
      style={{ width: '30%', marginBottom: '20px' }}
      key={id}
    >
      <div>
        <h3>{title} </h3>
      </div>
      <CommentList comments={comments} />
      <CommentCreate postId={id} />
    </div>
  ));

  // MAIN RENDER
  return (
    <div className='d-flex flex-row flex-wrap justify-content-between'>
      {renderPosts}
    </div>
  );
};

export default PostList;
