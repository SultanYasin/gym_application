

import { Box } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import NewsItem from "../components/newsComponent/NewsItem";

function News() {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getArticles = async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=350e61204f534f7fa5269d87ffcdafcc`
    );
    setArticles(response.data.articles);
  };

  useEffect(() => {
    getArticles();
  }, [searchQuery]);

  return (
    <Box mt="50px" ml="50px">
      <h2>Here you gonna see the news of sport and health</h2>

      
      <div style={{ display: "flex", alignItems: "center", marginTop: "20px"}}>
        <input
          type="text"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search for news"
          style={{
            padding: "10px",
            fontSize: "16px",
            border: "2px solid #ccc",
            borderRadius: "4px",
            marginRight: "10px",
          }}
        />

        <button
          
          onClick={getArticles}
          style={{
            background: "#4CAF50",
            color: "#fff",
            padding: "10px",
            borderRadius: "4px",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>

      {articles.map((article) => {
        return (
          <NewsItem
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
          />
        );
      })}
    </Box>
  );
}

export default News;
