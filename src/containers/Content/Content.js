import React from "react";
import { useSelector } from 'react-redux'
import ArticleForm from "../../components/ArticleForm";
import NewsFeed from "../../components/NewsFeed";

export default function Content() {
  const currentUser = useSelector(state => state.user)
  return (
    <div className="content">
      {currentUser.role === "user" ? <ArticleForm /> : null}
      <NewsFeed />
    </div>
  );
}
