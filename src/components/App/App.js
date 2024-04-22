import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls, postUrl } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

function App () {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    getUrls()
    .then(data => {
      setUrls(data.urls)
    })
    .catch(err => console.log(err.message))
  }, [])

  function addUrl(newUrl) {
    postUrl(newUrl)
    .then(data => {
      setUrls((prev) => {
        return [...prev, data]
      })
    })
    .catch(err => console.log(err.message))
  }

  return (
    <main className="App">
      <header>
        <h1>URL Shortener</h1>
        <UrlForm addUrl={addUrl} />
      </header>

      <UrlContainer urls={urls} />
    </main>
  );
}

export default App;
