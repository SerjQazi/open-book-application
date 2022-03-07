import React from "react";
import { useState } from "react";

import { BsArrowDownSquare, BsArrowUpSquare } from "react-icons/bs";

const BookRow = ({ result, setResult }) => {
  const getBookCover = (coverID) => {
      return `http://covers.openlibrary.org/b/id/${coverID}-M.jpg`;
  };

  const openLibraryUrl = "https://openlibrary.org";

  const [sortAlpha, setSortAlpha] = useState(false);
  const [sortYear, setSortYear] = useState(false);

  const sortTitle = () => {
    const sortedResult = [...result];
    const sortedList = sortedResult.sort((a, b) =>
      sortAlpha
        ? b.title.localeCompare(a.title)
        : a.title.localeCompare(b.title)
    );
    setResult(sortedList);
    setSortAlpha(!sortAlpha);
  };

  const sortByYear = () => {
    const sortedResult = [...result];
    const sortedList = sortedResult.sort((a, b) =>
      sortYear
        ? a.first_publish_year - b.first_publish_year
        : b.first_publish_year - a.first_publish_year
    );
    setResult(sortedList);
    setSortYear(!sortYear);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th></th>
            <th
              style={{ cursor: "pointer", paddingLeft: "25px" }}
              onClick={sortTitle}
            >
              Title
              {sortAlpha ? (
                <BsArrowDownSquare className="icon" size={25} />
              ) : (
                <BsArrowUpSquare className="icon" size={25} />
              )}
            </th>
            <th style={{ cursor: "pointer" }} onClick={sortByYear}>
              Year
              {sortYear ? (
                <BsArrowDownSquare className="icon" size={25} />
              ) : (
                <BsArrowUpSquare className="icon" size={25} />
              )}
            </th>
            <th style={{ paddingLeft: "75px" }}>Author</th>
          </tr>
        </thead>
        <tbody>
          {result.map((data) => (
            <tr key={data.key}>
              <td>
                {data.cover_i ? (
                  <img src={getBookCover(data.cover_i)} alt="" />
                ) : (
                  <div className="noImage">
                    <p>no image available</p>
                  </div>
                )}
              </td>
              <td>
                <p>{data.title}</p>
              </td>
              <td>
                <p>{data.first_publish_year}</p>
              </td>
              <td className="author">
                {data.author_name ? (
                  data.author_name.map((author, index) => (
                    <p key={index}>{author}</p>
                  ))
                ) : (
                  <p>N/A</p>
                )}
              </td>
              <td className="linkButton">
                <div className="buttonContainer">
                  <a href={openLibraryUrl + data.key} target="_blank">
                    View on Open Library
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BookRow;
