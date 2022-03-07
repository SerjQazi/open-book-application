import axios from "axios";

const titleBaseUrl = axios.create({
  baseURL: "https://openlibrary.org",
});


const api = {
  async getBookTitle(bookTitle) {
    const endpoint = `/search.json?title=${bookTitle}`;
    try {
      return await titleBaseUrl.get(endpoint);
    } catch (error) {
      console.log(error)
    }
  },
};



export { api };
