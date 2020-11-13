import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ArticleForm() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);
  const articles = useSelector(
    (state) => state.articles,
    (state) => state.articles.length
  );
  const username = currentUser.username;
  const [isOpen, setIsOpen] = useState(false);
  const [article, setArticle] = useState({ articleTitle: "", articleText: "" });

  const createId =
    Math.max.apply(
      Math,
      articles.map((article) => article.id)
    ) + 1;

  const handleChange = (event) => {
    setArticle({ ...article, [event.target.name]: event.target.value });
  };

  const handleClick = (event) => {
    event.preventDefault();

    const date = new Date(Date.now()).toDateString();
    dispatch({
      type: "CREATE",
      payload: { id: createId, article, username, date },
    });
  };
  return (
    <div className="create-article">
      <button
        className="create-article__button"
        onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
      >
        Добавить новость
      </button>
      {isOpen ? (
        <div className="create-article__form">
          <input
            type="text"
            name="articleTitle"
            id="articleTitle"
            value={article.name}
            onChange={handleChange}
            placeholder="Название"
          />
          <textarea
            name="articleText"
            id="articleText"
            value={article.text}
            onChange={handleChange}
            placeholder="Текст новости"
          ></textarea>
          <button onClick={handleClick}>Опубликовать</button>
        </div>
      ) : null}
    </div>
  );
}
