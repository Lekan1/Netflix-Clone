import { useQuery } from "@tanstack/react-query";
import { fetchTMDBData } from "../lib/tmdb";

type DiscoverMoviesParams = {
  page?: number;
  with_genres: string;
  with_cast: string;
};

// Movie by ID hook
export const useMovie = (id: string) => {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchTMDBData(`/movie/${id}`),
  });
};

// Movie search hook
export const useSearchMovie = (item: string) => {
  return useQuery({
    queryKey: ["search-movie", item],
    queryFn: () => fetchTMDBData(`/search/movie`, `query=${item}`),
  });
};

// Discover movies hook
export const useDiscoverMovies = ({ with_genres, page = 1, with_cast }: DiscoverMoviesParams) => {
  return useQuery({
    queryKey: ["discover-movies", with_genres, page],
    queryFn: () => fetchTMDBData(`/discover/movie`, `with_genres=${with_genres}&page=${page}&with_cast=${with_cast}`),
  });
};

// Popular movies hook
export const usePopularMovies = () => {
  return useQuery({
    queryKey: ["popular-movies"],
    queryFn: () => fetchTMDBData(`/movie/popular`),
  });
};

// Top rated movies hook
export const useTopRatedMovies = () => {
  return useQuery({
    queryKey: ["top-rated-movies"],
    queryFn: () => fetchTMDBData(`/movie/top_rated`),
  });
};

// Upcoming movies hook
export const useUpcomingMovies = () => {
  return useQuery({
    queryKey: ["upcoming-movies"],
    queryFn: () => fetchTMDBData(`/movie/upcoming`),
  });
};

//  Movie recommendations
export const useMovieRecommendations = (id: string) => {
  return useQuery({
    queryKey: ["movie-recommendation", id],
    queryFn: () => fetchTMDBData(`/movie/${id}/recommendations`),
  });
};
