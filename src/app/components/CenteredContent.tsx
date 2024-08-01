import React from 'react';

export default function CenteredContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      id="centered-content"
      className="h-full flex items-center justify-center m-6 flex-col no-scrollbar"
    >
      {children}
    </div>
  );
}
