'use client';

import React from 'react';
import { api } from '../api';

export default function PostForm({ getPosts }: { getPosts: () => void }) {
  const [title, setTitle] = React.useState<string>('');
  const [content, setContent] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);

  const isEnabled = content.length > 0 && title.length > 0;

  function handleFormSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    api
      .post('/api/posts/create/', { title, content })
      .then((res: any) => {
        if (res.status === 201) {
          setTitle('');
          setContent('');
          setLoading(false);
          getPosts();
        } else {
          setLoading(false);
          alert('Failed to create post!');
        }
      })
      .catch((err: Error) => {
        alert(err);
        console.log(err);
      });
  }

  return (
    <div>
      <form id="new-post-form" className=" flex flex-col">
        <h1 id="new-post-title" className="text-2xl pb-4 font-semibold">
          New Post
        </h1>
        <input
          className="form-input"
          id="title"
          type="text"
          name="title"
          autoComplete="off"
          placeholder="Post Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="form-input pt-2"
          id="content"
          name="content"
          rows={4}
          autoComplete="off"
          placeholder="Post Content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          disabled={!isEnabled || loading}
          className="form-button"
          type="submit"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
