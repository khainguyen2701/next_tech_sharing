interface Author {
  id: number;
  name: string;
  avatar: string;
}

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface RelatedNews {
  id: number;
  title: string;
  slug: string;
  image: string;
  thumbnail: string;
}

export interface NewsDetail {
  id: number;
  title: string;
  short_description: string;
  slug: string;
  author: Author;
  published_at: string;
  updated_at: string;
  content: string;
  image: string;
  thumbnail: string;
  categories: Category[];
  tags: string[];
  views: number;
  likes: number;
  comments_count: number;
  related_news: RelatedNews[];
}
