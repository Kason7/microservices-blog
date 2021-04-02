import React from 'react';

const CommentList = ({ comments }) => {
  // RENDERS
  const renderComments = comments.map(({ id, comment, status }) => {
    let content;

    if (status === 'approved') {
      content = comment;
    }
    if (status === 'pending') {
      content = 'This comment is awaiting moderation';
    }
    if (status === 'rejected') {
      content = 'This comment has been rejected';
    }

    return <li key={id}>{content}</li>;
  });

  // MAIN RENDER
  return <ul>{renderComments}</ul>;
};

export default CommentList;
