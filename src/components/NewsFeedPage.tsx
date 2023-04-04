// Helpers
import { getNewsFeed } from "../helpers/getNewsFeed";
import { NewsGrid } from "./NewsGrid";
import { Error } from "./Error";
import { LoadingBlock } from "./LoadingBlock";

export const NewsFeedPage: React.FC<{}> = () => {
  const [newsFeedData, newsFeedError, newsFeedLoading] = getNewsFeed();

  // Error Block
  if (newsFeedError) {
    return <Error error={newsFeedError} />;
  }

  // Loading Block
  if (newsFeedLoading || !newsFeedData) {
    return <LoadingBlock message="Loading News Feed..." />;
  }

  // Main Block
  return <NewsGrid articles={newsFeedData} />;
};
