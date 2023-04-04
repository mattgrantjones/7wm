import useSWR from "swr";
import { fetcher } from "./fetcher";

// Types
import type { NewsArticle, NewsFeedResponse } from "../types/newsArticles";

export const getNewsFeed = (): [
  data: NewsArticle[] | undefined,
  error: Error | undefined,
  isLoading: boolean | undefined
] => {
  const URL = "/news";

  const { data, error, isLoading } = useSWR<NewsFeedResponse, Error>(
    URL,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      errorRetryInterval: 0,
      shouldRetryOnError: false,
    }
  );

  return [data?.articles, error, isLoading];
};
