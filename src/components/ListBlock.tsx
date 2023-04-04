import { NewsArticle } from "../types/newsArticles";

const ListBlock: React.FC<{ articles: NewsArticle[] }> = ({ articles }) => {
  return (
    <div className="col-start-4 row-start-3 col-end-4 row-span-2 flex flex-col justify-start text-left">
      {articles?.map((article, articleIndex) => (
        <div
          key={article.id}
          className={
            "flex flex-col mt-0 sm:px-2 pb-6 first:pt-0 pt-4 sm:pb-2 sm:pt-8 sm:first:pt-0 items-start flex-grow self-stretch " +
            (articleIndex < articles.length - 1 ? "border-b-2" : "")
          }
        >
          <h1 className={"text-xl"}>{article.head}</h1>
        </div>
      ))}
    </div>
  );
};

export default ListBlock;
