import axios from "axios";

export const tmdbAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TMDB_API_URL,
});

export const fetchTMDBData = async (endpoint: string, params: string = "") => {
  const url = `${endpoint}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}${params ? `&${params}` : ""}`;

  try {
    const response = await tmdbAPI.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
};
