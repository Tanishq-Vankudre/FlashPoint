import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import './NewsBoard.css';

const NewsBoard = ({ category, searchQuery }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&max=10&apikey=${import.meta.env.VITE_API_KEY}`;
    if (searchQuery) {
      url = `https://gnews.io/api/v4/search?q=${searchQuery}&lang=en&max=10&apikey=${import.meta.env.VITE_API_KEY}`;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => {
        // GNews → data.articles with "image"
        const filteredArticles = data.articles.filter(article => article.image);
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
          <Newsitem 
            key={index} 
            title={news.title} 
            description={news.description} 
            src={news.image} 
            url={news.url} 
          />
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
