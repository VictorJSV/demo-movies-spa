import axios from 'axios';

export const service = {
  async getMovies() {
    try {
      const { data } = await axios.get('http://localhost:3000/movies');
      return data;
    } catch(e) {
      throw new Error();
    }
  }
}
