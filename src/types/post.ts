export type PostMetadata = {
  title: string;
  date: string;
  thumbnail?: string;
  description: string;
  author: string;
  introTitle: string;
  introDesc: string;
  category: string;
};

export type Post = {
  slug: string;
  metadata: PostMetadata;
  content: string;
};
