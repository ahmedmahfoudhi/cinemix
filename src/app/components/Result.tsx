import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IMovieResponse } from "../../../interfaces/movies.interface";
import MovieCard from "./MovieCard";

export default function Result({ results }: { results: IMovieResponse[] }) {
  return (
    <div
      className="px-5 my-10 sm:grid md:grid-cols-2 
    xl:grid-cols-3 3xl:flex 3xl:flex-wrap"
    >
      {results.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
}
