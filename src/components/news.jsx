import React, { useState, useEffect } from "react";
import background from "../assets/NHL_Logo.png";


const NHLNews = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading]= useState(true);

  const fetchNews = async () => {

    fetch(
      "http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/news"
    )
      .then(response => response.json())
      .then ((data) => {
        setNews(data.articles);
      })
      .catch (err=> console.error(err))
      .finally(()=> {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="news">
      <img className="backgroundImg" src={background} alt="NHL LOGO" />
      <div className="newsCard" >
      <h2>NHL News</h2>
      {news.map((article, index) => (
        <div key={index}>
          <h3>{article.headline}</h3>
          <p>{article.description}</p>
          <a href={article.links.web.href} target="_blank" rel="noreferrer">Read more</a>
        </div>
      ))}
      </div>
    </div>
  );
};

export default NHLNews;
