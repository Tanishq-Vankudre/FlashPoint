import React from 'react';
import image from '/Users/sanketpatil/news-mag/assets/news.jpg'; 

const Newsitem = ({ title, description, src, url }) => {
  if (!src) {
    return null; 
  }

  return (
    <div className="card bg-dark text-light mb-3">
      <img src={src} onError={(e) => e.target.src = image} className="card-img-top" alt="news" style={{ height: "200px", objectFit: "cover" }} />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "No description available."}</p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
};

export default Newsitem;
