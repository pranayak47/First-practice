import axios from 'axios';

const API_BASE_URL = ' http://www.omdbapi.com/?i=tt3896198&apikey=99e8aac9'; 

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movies`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};
