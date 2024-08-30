const NewsHeadlines = ({ headlines }) => {
    return (
      <div className="news-headlines">
        {headlines.map((article, index) => (
          <div key={index} className="headline">
            <h3>{article.title}</h3>
            <p>{article.source.name} - {new Date(article.publishedAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default NewsHeadlines;