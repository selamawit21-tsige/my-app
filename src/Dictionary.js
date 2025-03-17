/* eslint-disable no-undef */
import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
      alert(`Searching for ${keyword} definition`);
   //documentatio

    // eslint-disable-next-line no-template-curly-in-string
    let apiUrl = '4d9a2f9t09f9248b85e020e0o8b613c6 ${keyword}';
       axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
