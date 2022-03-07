import React from "react";
import { useState, useEffect } from "react";
import "./styles/styles.scss";

import { api } from "./api/Configurations";

import BookRow from "./components/BookRow";

function App() {
  const [result, setResult] = useState([]);
  const [bookTitle, setBookTitle] = useState("");
  const [userSearch, setUserSearch] = useState("");

  const [loading, setLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasFailed, setHasFailed] = useState(false);

  async function loadBookTitle() {
    try {
      const response = await api.getBookTitle(bookTitle);
      console.log(response);
      setResult(response.data.docs);
      setLoading(false);
      setHasFailed(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setHasFailed(true);
    }
    setIsLoaded(true);
  }


  const handleChange = (event) => {
    setBookTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loadBookTitle();
    setLoading(true);
    setUserSearch(bookTitle);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="mainContainer">
          <div
            className={
              !result.length ? "titleContainer notLoaded" : "titleContainer"
            }
          >
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
          {/* end of title container */}

          {loading ? (
            <div className="message">
              <p>Your results are being loaded...</p>
            </div>
          ) : hasFailed ? (
            <div className="message">
              <p>Error loading data, please try again later.</p>
            </div>
          ) : result.length ? (
            <div className="bookList">
              <BookRow
                result={result}
                setResult={setResult}
                loadBookTitle={loadBookTitle}
              />
            </div>
          ) : (
            isLoaded && (
              <div className="message">
                <p>Oops! we couldn't find any results for "{userSearch}"</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
