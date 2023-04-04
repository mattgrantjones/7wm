import { NewsArticle } from "../types/newsArticles";

const ListBlock: React.FC<{ articles: NewsArticle[] }> = ({ articles }) => {
  return (
    <div className="col-start-4 row-start-3 col-end-4 row-span-2 flex flex-col justify-start text-left">
      {articles?.map((article, articleIndex) => (
        <div
          key={article.id}
          className={
            "flex flex-col p-2 items-start flex-grow self-stretch " +
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
