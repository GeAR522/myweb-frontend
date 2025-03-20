'use client';

import React from 'react';
import { api } from '../api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants/constants';
import { useRouter } from 'next/navigation';

interface IUserForm {
  route: string;
  method: string;
}
export default function UserForm({ route, method }: IUserForm) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();

  const name = method === 'login' ? 'Login' : 'Register';

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res: any = await api.post(route, { username, password });
      if (method === 'login') {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        router.push('/');
      } else {
        router.push('/login');
      }
    } catch (error) {
      console.log(error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="container flex flex-col">
        <h1 id="form-title" className="text-4xl pb-4 self-center">
          {name}
        </h1>
        <input
          className=" form-input"
          id="username-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          className="form-input"
          id="password-input"
          type="password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {/* {loading && <LoadingIndicator />} */}
        <button disabled={loading} className="form-button" type="submit">
          {name}
        </button>
      </form>
    </div>
  );
}
