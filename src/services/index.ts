import axios from "axios";

export const api = axios.create({
  baseURL: 'https://api.chucknorris.io/jokes/search',
  headers: {
    'Content-Type': 'application/json'
  }
});

export async function getJokes(text:String) {
  try {
    const res = await api.get(`?query={${text}}`);

    return res.data;
  } catch (err) {
    throw err;
  }
}
