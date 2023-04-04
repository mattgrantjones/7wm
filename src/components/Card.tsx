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
        return "max-h-fit sm:col-span-3 sm:row-span-2 mb-4 sm:border-r-2 sm:border-b-2";
      case "sub-hero":
        return "border-t-2 pt-6 sm:pt-0 border-b-2 sm:border-t-0 sm:row-span-2 mb-8 sm:mb-4 sm:pr-0";
      case "large":
        return `border-b-2 sm:border-b-0 mb-6 sm:mb-0 sm:row-span-2 sm:border-r-2 ${
          position === "right" ? "sm:border-l-2 sm:pl-2" : ""
        }`;
      case "small":
        return `border-b-2 sm:first:border-b-2 mb-6 sm:mb-0 sm:pl-2 ${
          position === "top" ? "sm:border-b-2" : "sm-border-b-0"
        }`;
    }
  };

  // Some of the res data returns a pathname in the URL. Trimming it here.
  const imageURL = `../assets/${article.image.split("/").at(-1)}`;

  return (
    // Main Card
    <div
      className={`flex justify-between mb-2 pb-6 sm:pb-0 gap-6 sm:gap-4 pt-0 sm:pr-2
        ${getGridStyle(type)} ${
        type !== "hero" ? "flex-col" : "flex-col sm:flex-row"
      }`}
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
      <div
        className={`${
          type === "hero" ? "max-w-full sm:max-w-[50%] " : ""
        } flex flex-col gap-3 sm:px-2 items-start flex-grow`}
      >
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
          className="flex-grow w-full h-80 sm:h-full"
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
