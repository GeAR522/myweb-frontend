export type Project = {
  id: number;
  title: string;
  description: string;
  url: string;
};

export type Post = {
  id: number;
  content: string;
  created_at: string;
  updated_at: string;
  title: string;
  author: number;
  tags: string[];
};
