import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode, JwtDecodeOptions } from 'jwt-decode';
import { api } from '../api';
import { REFRESH_TOKEN, ACCESS_TOKEN } from '../constants/constants';

export default function ProtectedRoutes({ children }: { children: ReactNode }) {
  const [isAuthorised, setIsAuthorised] = React.useState(false);

  React.useEffect(() => {
    auth().catch(() => setIsAuthorised(false));
  }, []);

  async function refreshToken() {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    try {
      const res: any = await api.post('api/token/refresh', {
        refresh: refreshToken,
      });
      if (res.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        setIsAuthorised(true);
      } else {
        setIsAuthorised(false);
      }
    } catch (error) {
      console.log(error);
      setIsAuthorised(false);
    }
  }

  async function auth() {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      const decoded: any = jwtDecode(token);
      if (decoded.exp > Date.now() / 1000) {
        setIsAuthorised(true);
      } else {
        refreshToken();
      }
    }
  }

  if (isAuthorised == null) {
    return null;
  }

  return <div>{children}</div>;
}
