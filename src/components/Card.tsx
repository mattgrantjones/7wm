import { NewsArticle } from "../types/newsArticles";

export type CardDisplayType =
  | "hero"
  | "sub-hero"
  | "large"
  | "small"
  | "list-block";

type Card = {
  type: CardDisplayType;
  position?: "top" | "bottom" | "left" | "right";
  article: NewsArticle;
};

const Card: React.FC<Card> = ({ type, position, article }) => {
  // Get TailwindCSS Grid Style Classes based on Card Type
  const getGridStyle = (type: CardDisplayType) => {
    switch (type) {
      case "hero":
        return "col-span-3 row-span-2 mb-4 border-r-2 border-b-2";
      case "sub-hero":
        return "row-span-2 mb-4 border-b-2 pr-0";
      case "large":
        return `row-span-2 border-r-2 ${
          position === "right" ? "border-l-2 pl-2" : ""
        }`;
      case "small":
        return `pl-2 ${position === "top" ? "border-b-2" : ""}`;
    }
  };

  // Some of the res data returns a pathname in the URL. Trimming it here.
  const imageURL = `../assets/${article.image.split("/").at(-1)}`;

  return (
    // Main Card
    <div
      className={`flex relative gap-4 pt-0 pr-2
        ${getGridStyle(type)} ${type !== "hero" ? "flex-col" : ""}`}
    >
      {/* Article Image (shown above article, only for Sub-hero and Large articles */}
      {(type === "large" || type === "sub-hero") && (
        <div
          className="flex-grow w-full h-52"
          style={{
            backgroundImage: `url("${imageURL}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
      {/* Article Text: In a column flex box for all article types */}
      <div className="flex flex-col gap-3 px-2 items-start flex-grow self-stretch">
        <h1
          className={(type === "hero" ? "text-4xl" : "text-2xl") + " text-left"}
        >
          {article.head}
        </h1>
        <p className="text-left text-lg">{article.teaser}</p>
        <h2
          className={
            "text-lg mb-4 font-semibold " +
            (type !== "sub-hero" ? "mt-auto" : "mt-2")
          }
        >
          {article.byline.text}
        </h2>
      </div>
      {/** Hero Image for "Hero" Article, shown to the right of text content */}
      {type === "hero" && !!article.image && (
        <div
          className="flex-grow w-full h-full"
          style={{
            backgroundImage: `url("${imageURL}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      )}
    </div>
  );
};

export default Card;
