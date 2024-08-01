import React from 'react';

interface DividerProps {
  color?: string;
  thickness?: string;
  margin?: string;
}
export default function Divider({
  color = 'bg-slate-300',
  thickness = 'h-[2px]',
  margin = 'my-4',
}: DividerProps) {
  return (
    <div className={`w-full opacity-25 ${color} ${thickness} ${margin}`}></div>
  );
}
