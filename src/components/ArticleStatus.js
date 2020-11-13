import React from "react";

export default function ArticleStatus() {
  return (
    <select className="article__status" name="status" id="status">
      <option value="pending">Ожидает одобрения</option>
      <option value="approved">Одобрено к публикации</option>
      <option value="rejected">Не допущено к публикации</option>
    </select>
  );
}
