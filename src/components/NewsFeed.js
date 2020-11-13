import React from "react";
import { useSelector } from "react-redux";
import ArticleStatus from "./../components/ArticleStatus";

export default function NewsFeed() {
  const articles = useSelector(
    (state) => state.articles,
    (state) => state.articles.length
  );
  const currentUser = useSelector((state) => state.user);
  return (
    <div className="newsfeed">
      {articles.map((article) =>
        currentUser.role === "admin" ||
        currentUser.username === article.author ||
        article.status === "approved" ? (
          <article className="article" key={article.id}>
            <title className="article__title">Title</title>
            {currentUser.role === "admin" ? <ArticleStatus /> : null}
            <div className="article__author">Автор: {article.author}</div>
            <span className="article__date">Дата: {article.date}</span>
            <div className="article__text">{article.text}</div>
          </article>
        ) : null
      )}
    </div>
  );
}
