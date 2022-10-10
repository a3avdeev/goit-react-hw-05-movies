import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/"
const API_KEY = "9827f40b343f4f4b022b63e7687192bf"

export const fetchTrending = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}trending/all/day?api_key=${API_KEY}`
    );
    console.log(response.data);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearch = async (query) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    console.log(response.data);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDetails = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCredits = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
    );
    console.log(response.data);
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const fetchReviews = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
    );
    console.log(response.data);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};