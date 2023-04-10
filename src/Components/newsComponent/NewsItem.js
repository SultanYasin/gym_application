import React from "react";
import "./NewsItem.css";

function NewsItem({ title, description, url, urlToImage }) {
  return (
    <div className="container">
      <div className="news_item">
        <img className="news_img" src={urlToImage} alt={urlToImage} />
        <h3>
          <a href={url}> {title} </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default NewsItem;
