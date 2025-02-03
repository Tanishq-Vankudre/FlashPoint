import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import './NewsBoard.css';

const NewsBoard = ({ category, searchQuery }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    if (searchQuery) {
      url = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${import.meta.env.VITE_API_KEY}`;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const filteredArticles = data.articles.filter(article => article.urlToImage); 
        setArticles(filteredArticles);
      });
  }, [category, searchQuery]);

  return (
    <div className="newsboard-container">
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="news-cards-container">
        {articles.map((news, index) => (
          <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
