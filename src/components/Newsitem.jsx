import React from 'react';
import image from '/assets/news.jpg';
import './Newsitem.css'; 

const Newsitem = ({ title, description, src, url }) => {
  if (!src) {
    return null; 
  }

  return (
    <div className="news-item">
      <img src={src} onError={(e) => e.target.src = image} className="news-item-img" alt="news" />
      <div className="news-item-content">
        <h3 className="news-item-title">{title.slice(0, 50)}</h3>
        <p className="news-item-description">{description ? description.slice(0, 90) : "No description available."}</p>
        <a href={url} className="news-item-link" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>
    </div>
  );
};

export default Newsitem;
