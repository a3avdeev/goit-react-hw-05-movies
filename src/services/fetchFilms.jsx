import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "9827f40b343f4f4b022b63e7687192bf";

export const fetchTrending = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}trending/all/day?api_key=${API_KEY}`
    );
    // console.log(response.data);
    return response.data.results;
  } catch (error) {
    console.log(error.message);
    alert(`Sorry. ${error.message}. Please try another movie`);
  }
};

export const fetchSearch = async (query) => {
  try {
    const response = await axios.get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`
    );
    // console.log(response.data);
    return response.data.results;
  } catch (error) {
    console.log(error.message);
    alert(`Sorry. ${error.message}. Please try another movie`);
  }
};

export const fetchDetails = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${id}?api_key=${API_KEY}`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    alert(`Sorry. ${error.response.data.status_message} Please try to search another movie`);
    // для проверки
    window.location.replace("/goit-react-hw-05-movies/movies");
  }
};

export const fetchCredits = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`
    );
    // console.log(response.data);
    return response.data.cast;
  } catch (error) {
    console.log(error.message);
    alert(`Sorry. ${error.message}. Please try something else`);
  }
};

export const fetchReviews = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`
    );
    // console.log(response.data);
    return response.data.results;
  } catch (error) {
    console.log(error.message);
    alert(`Sorry. ${error.message}. Please try something else`);
  }
};
