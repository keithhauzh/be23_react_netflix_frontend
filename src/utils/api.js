import axios from "axios";

// static data
const API_URL = "http://localhost:5555";

export const getMovies = async (genre = "") => {
  try {
    const response = await axios.get(API_URL + "/movies?genre=" + genre); // http://localhost:5555/movies
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getShows = async () => {
  try {
    const response = await axios.get(API_URL + "/shows");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getGenres = async () => {
  try {
    const response = await axios.get(API_URL + "/genres"); // http://localhost:5555/genres
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
