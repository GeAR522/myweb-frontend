import React from 'react';
import NavBar from '../components/NavBar';
import CenteredContent from '../components/CenteredContent';
import UserForm from '../components/UserForm';

export default function Register() {
  return (
    <main className="flex w-full h-full overflow-y-auto">
      <div className=" overflow-y-auto w-full ">
        <NavBar />
        <div id="main" className="sm:ml-48 text-white">
          <CenteredContent>
            <UserForm route="/api/user/register/" method="register" />
          </CenteredContent>
        </div>
      </div>
    </main>
  );
}
