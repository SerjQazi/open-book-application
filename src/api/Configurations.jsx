import axios from "axios";

const titleBaseUrl = axios.create({
  baseURL: "https://openlibrary.org",
});

const coverImageBaseUrl = axios.create({
  baseURL: "http://covers.openlibrary.org/b/id",
});

const api = {
  async getBookTitle(bookTitle) {
    const endpoint = `/search.json?title=${bookTitle}`;
    try {
      return await titleBaseUrl.get(endpoint);
    } catch (error) {
    }
  },


  async getCoverImage(coverID, size) {
    const endpoint = `/${coverID}-${size}.jpg`;
    try {
      return await coverImageBaseUrl.get(endpoint);
    } catch (error) {
    }
  },
};

export { api };
