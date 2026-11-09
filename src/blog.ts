import posts from './blog-posts.json';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  cover?: string;
  coverWidth?: number;
  coverHeight?: number;
  related?: readonly string[];
  html: string;
}

export const blogPosts: readonly BlogPost[] = posts;
const dateFormat = new Intl.DateTimeFormat('pt-BR', {
  dateStyle: 'long',
  timeZone: 'UTC',
});
export const formatBlogDate = (date: string) => dateFormat.format(new Date(date));
export const blogPath = (slug: string) => '/' + slug + '/';
const postsBySlug = new Map(blogPosts.map(post => [post.slug, post]));
export const relatedBlogPosts = (post: BlogPost) => (post.related ?? [])
  .map(slug => postsBySlug.get(slug))
  .filter((related): related is BlogPost => related !== undefined && related.slug !== post.slug);
