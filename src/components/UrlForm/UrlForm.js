import React, { useState } from 'react';

function UrlForm({ addUrl }) {
  const [title, setTitle] = useState('');
  const [urlToShorten, setUrlToShorten] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newUrl = {
      long_url: urlToShorten,
      title: title
    }
    addUrl(newUrl);
    clearInputs();
  }

  const clearInputs = () => {
    setTitle('');
    setUrlToShorten('');
  }

  const handleChange = (e) => {
    if(e.target.name === "Title") {
      setTitle(e.target.value)
    } else {
      setUrlToShorten(e.target.value)
    }
  }

  return (
    <form>
      <input
        required
        type='text'
        placeholder='Title...'
        name='Title'
        value={title}
        onChange={e => handleChange(e)}
      />

      <input
        required
        type='text'
        placeholder='URL to Shorten...'
        name='url'
        value={urlToShorten}
        onChange={e => handleChange(e)}
      />

      <button onClick={e => handleSubmit(e)}>
        Shorten Please!
      </button>
    </form>
  )
}

export default UrlForm;
