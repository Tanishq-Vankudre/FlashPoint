import React from 'react'
import image from '/Users/sanketpatil/news-mag/assets/news.jpg'

const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"370px"}}>
      <img src={src?src:image} style={{height:"200px",width:"350px"}} className="card-img-top"></img>
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description?description.slice(0,90):"Nothing but random text put here by sanket and tanishq as this news failed to fetch the description."}</p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  )
}

export default NewsItem