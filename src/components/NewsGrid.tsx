import { NewsArticle } from "../types/newsArticles";

// Components
import Card from "./Card";

// Types
import { CardDisplayType } from "./Card";
import ListBlock from "./ListBlock";

export const NewsGrid: React.FC<{ articles: NewsArticle[] }> = ({
  articles,
}) => {
  // Use these grid areas to apply the appropriate classes to each article
  const gridAreaClasses: {
    section: CardDisplayType;
    position?: "top" | "bottom" | "left" | "right";
  }[] = [
    { section: "hero" },
    { section: "sub-hero" },
    { section: "large", position: "left" },
    { section: "small", position: "top" },
    { section: "large", position: "right" },
    { section: "small", position: "bottom" },
    { section: "list-block" },
  ];

  return (
    <div
      id="main-grid"
      className="flex flex-col sm:grid sm:grid-cols-4 auto-rows-min gap-2 w-full "
    >
      {articles?.map((article, articleNumber, fullList) => {
        // From Article 7, render as a list in the ListBlock
        if (articleNumber === 6) {
          const listBlockArticles = fullList.slice(6);
          return <ListBlock key="list-block" articles={listBlockArticles} />;
        }

        // All other articles render as Cards
        if (articleNumber < 7) {
          return (
            <Card
              key={article.id}
              type={gridAreaClasses[articleNumber]?.section}
              position={gridAreaClasses[articleNumber]?.position}
              article={article}
            />
          );
        }
      })}
    </div>
  );
};
