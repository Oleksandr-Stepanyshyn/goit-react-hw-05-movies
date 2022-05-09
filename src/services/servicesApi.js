import axios from 'axios';

const API_KEY = 'c01f14dcdb58e9cec669b1017a4d540c';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchFilms = async () => {
  const response = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  const { results } = response.data;
  return results;
};

export const fetchDetailsFilm = async id => {
  const { data } = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return data;
};

export const fetchActorList = async id => {
  const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  const { cast } = response.data;
  return cast;
};

export const fetchReviews = async id => {
  const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
  const { results } = response.data;
  return results;
};

export const fetchSearchMovies = async query => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&${query}&page=1`
  );
  const { results } = response.data;
  return results;
};
