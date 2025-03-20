'use client';

import React from 'react';
import { animated, useInView } from 'react-spring';
import { Post } from '../types/global_types';
import PostCard from './PostCard';
import PostForm from './PostForm';
import axios from 'axios';

export default function Posts() {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: 100,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    {
      rootMargin: '-10% 0%',
      once: true,
    },
  );
  const [posts, setPosts] = React.useState<Post[]>([]);

  React.useEffect(() => {
    console.log('running ue');
    getPosts();
  }, []);

  function getPosts() {
    axios
      .get('http://127.0.0.1:8000/api/posts/')
      .then((res: any) => res.data)
      .then((data: any) => {
        setPosts(data);
        console.log(data);
      })
      .catch((err: Error) => {
        alert(err);
        console.log(err);
      });
  }

  return (
    <animated.div
      ref={ref}
      style={springs}
      id="blog-block"
      className="container"
    >
      <div id="posts-header">
        <h1 id="posts-title" className="text-3xl font-semibold">
          Blog
        </h1>
      </div>
      <div id="posts-content" className="py-6">
        {posts.length > 0 ? (
          posts.map((post: Post) => {
            return (
              <div key={post.id}>
                <PostCard post={post} />
              </div>
            );
          })
        ) : (
          <p id="no-posts" className="text-center text-2xl">
            No Blog Posts Yet...
          </p>
        )}
      </div>
      <div id="new-post-form" className="py-4">
        <PostForm getPosts={getPosts} />
      </div>
    </animated.div>
  );
}
