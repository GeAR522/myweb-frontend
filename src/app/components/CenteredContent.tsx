import React from 'react';

export default function CenteredContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      id="centered-content"
      className="h-full flex items-center justify-center px-6 mt-6 pb-6 overflow-hidden flex-col "
    >
      {children}
    </div>
  );
}
