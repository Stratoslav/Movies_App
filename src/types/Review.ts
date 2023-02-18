type Author = {
  name: string;
  username: string;
  avatar_path: string;
  rating: number;
};
export type ReviewType = {
  author: string;
  author_details: Author;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
};
