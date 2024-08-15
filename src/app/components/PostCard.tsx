import React from 'react';
import { Post } from '../types/global_types';
import { animated, useInView } from 'react-spring';
import axios from 'axios';

interface IPostCard {
  post: Post;
}

export default function PostCard({ post }: IPostCard) {
  React.useEffect(() => {
    if (post) {
      getAuthorName();
    }
  }, [post]);
  const [authorName, setAuthorName] = React.useState();

  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: '0% -10%',
      once: true,
    },
  );

  async function getAuthorName() {
    await axios
      .get(`http://127.0.0.1:8000/api/users/${post.author}`)
      .then((res: any) => res.data)
      .then((data: any) => {
        setAuthorName(data[0].username);
      })
      .catch((err: Error) => alert(err));
  }

  return (
    <animated.div
      ref={ref}
      style={springs}
      id="employment-block"
      className="py-3"
    >
      <div
        id="post-card"
        className="flex flex-col border-slate-300 border-opacity-30 border rounded-lg px-6"
      >
        <div
          id="post-header"
          className="pt-3 flex flex-row items-stretch justify-between "
        >
          <div
            id="post-title-and-author"
            className="flex flex-row items-baseline"
          >
            <h1
              id="post-title"
              className="text-3xl capitalize font-semibold mr-6"
            >
              {post.title}
            </h1>
            <p id="post-author" className="text-md font-semibold">
              by {authorName}
            </p>
          </div>
          <p>
            Created: {new Date(post.created_at).toLocaleDateString()} - Updated:{' '}
            {new Date(post.updated_at).toLocaleDateString()}
          </p>
        </div>
        <div id="post-contents" className="py-4 whitespace-pre-wrap">
          <p>{post.content}</p>
        </div>
        <div
          id="post-card-footer"
          className="py-2 flex flex-row justify-between items-center"
        ></div>
      </div>
    </animated.div>
  );
}
