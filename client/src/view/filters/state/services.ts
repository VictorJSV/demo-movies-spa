import axios from 'axios';

export const service = {
  async getGenres() {
    try {
      const { data } = await axios.get('http://localhost:3000/genres');
      return data;
    } catch(e) {
      throw new Error();
    }
  }
}