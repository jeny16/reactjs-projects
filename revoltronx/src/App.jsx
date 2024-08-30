import React, { useEffect, useState } from 'react';
import NewsHeadlines from './components/NewsHeadline';
import './App.css';

function App() {
  const API_KEY = '4c4d6d66babf46f9960b6a20b0a0ee52';
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setHeadlines(data.articles.slice(0, 5));
      })
      .catch(error => {
        console.error("Error fetching the news:", error);
        setError(true);
      });
  }, [url]);

  return (
    <div className="App">
      <h1>Top News Headlines</h1>
      {error ? (
        <p>Sorry, we couldn't fetch the latest news. Please try again later.</p>
      ) : (
        <NewsHeadlines headlines={headlines}/>
      )}
    </div>
  );
}

export default App;
