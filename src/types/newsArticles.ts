export type NewsArticle = {
  id: string;
  byline: { text: string };
  head: string;
  teaser: string;
  image: string;
};

export type NewsFeedResponse = {
  articles: NewsArticle[];
};
