"use client";

import { usePopularMovies, useSearchMovie } from "@/hooks/use-movies";

export default function Home() {
  const { data } = usePopularMovies();
  const { data: search } = useSearchMovie("antman");

  console.log("search", search);
  console.log("data", data);

  return <h1 className="text-2xl">Hello World</h1>;
}
