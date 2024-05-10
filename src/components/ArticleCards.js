import React from "react";
import ArticleCard from "./ArticleCard";

const ArticleCards = () => {
  return (
    <div>
      <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        <div class="col">
          <ArticleCard></ArticleCard>
        </div>
        <div class="col">
          <ArticleCard></ArticleCard>
        </div>
        <div class="col">
          <ArticleCard></ArticleCard>
        </div>
      </div>
    </div>
  );
};

export default ArticleCards;
