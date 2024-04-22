import React, { useState } from 'react';

function UrlForm() {
  const [title, setTitle] = useState('');
  const [urlToShorten, setUrlToShorten] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
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

  console.log("title", title)
  console.log("url", urlToShorten)

  return (
    <form>
      <input
        type='text'
        placeholder='Title...'
        name='Title'
        value={title}
        onChange={e => handleChange(e)}
      />

      <input
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
