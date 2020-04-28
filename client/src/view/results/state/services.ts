import axios from 'axios';

export const serviceMovies = {
    async getMovies() {
      try {
        const { data } = await axios.get('https://reqres.in/api/users');
        return data;
      } catch(e) {
        throw new Error();
      }
    }
  }