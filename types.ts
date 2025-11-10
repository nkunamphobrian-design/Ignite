export interface Post {
  id: number;
  slug: string;
  title: string;
  author: string;
  date: string;
  summary: string;
  content: string;
  imageUrl: string;
  tags: string[];
}
