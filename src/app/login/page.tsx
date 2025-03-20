import React from 'react';
import NavBar from '../components/NavBar';
import CenteredContent from '../components/CenteredContent';
import UserForm from '../components/UserForm';

export default function Login() {
  return (
    <main className="flex w-full h-full overflow-y-auto">
      <div className=" overflow-y-auto w-full ">
        <NavBar />
        <div id="main" className="sm:ml-48 text-white">
          <CenteredContent>
            <UserForm route="/api/token/" method="login" />
          </CenteredContent>
        </div>
      </div>
    </main>
  );
}
