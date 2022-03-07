import React from "react";
import { useState, useEffect } from "react";
import "./styles/styles.scss";

import { api } from "./api/Configurations";

function App() {

  const [result, setResult] = useState([]);
  const [bookTitle, setBookTitle] = useState("");

  const [isLoaded, setIsLoaded] = useState(false);
  const [isFailed, setIsFailed] = useState(false);


  async function loadBookTitle() {
    try {
      const response = await api.getBookTitle(bookTitle);
      console.log(response);
      setResult(response.data.docs);
      setIsLoaded(false)
      setIsFailed(false)
    } catch (error) {
      console.log(error);
      setIsLoaded(false)
      setIsFailed(true)
    }
  }


  const handleChange = (event) => {
    setBookTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loadBookTitle();
    setIsLoaded(true);
  };


  return (
    <div className="App">
      <div className="wrapper">
        <div className="mainContainer">
          <div className="titleContainer">
            <h1>Open Book</h1>
            <h2>Search for books by title</h2>

            <form
              onSubmit={(event) => {
                handleSubmit(event);
              }}
            >
              <input
                onChange={(event) => {
                  handleChange(event);
                }}
                type="text"
                placeholder="enter a title to search..."
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
