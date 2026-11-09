import posts from './blog-posts.json';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  html: string;
}

export const blogPosts: readonly BlogPost[] = posts;
const dateFormat = new Intl.DateTimeFormat('pt-BR', {
  dateStyle: 'long',
  timeZone: 'UTC',
});
export const formatBlogDate = (date: string) => dateFormat.format(new Date(date));
export const blogPath = (slug: string) => '/' + slug + '/';