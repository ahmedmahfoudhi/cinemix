"use client";
import { useRouter } from "next/navigation";
import {
  getApiUrl,
  moviesGenres,
  trendingAndTopRatedMovies,
} from "../constants";
import {
  IMoviesGenres,
  ITrendingAndTopRatedMovies,
} from "../../../interfaces/movies.interface";

export default function Nav() {
  const router = useRouter();

  return (
    <nav className="mt-4 relative">
      <div
        className="flex space-x-10 
       sm:space-x-20 px-10 sm:px-20 text-2xl no-wrap 
       overflow-x-scroll scrollbar-hide"
      >
        {[...trendingAndTopRatedMovies, ...moviesGenres].map((movie, idx) => (
          <h2
            key={idx}
            onClick={() => router.push(`/?genre=${movie.key}`)}
            className="text-xl hover:scale-125 cursor-pointer
          whitespace-nowrap transition active:text-red-500 
          duration-100 transform last:pr-24"
          >
            {movie.title}
          </h2>
        ))}
      </div>
      <div
        className="absolute top-0 right-0 bg-gradient-to-l 
      from-[#261c43] h-10 w-1/12"
      />
    </nav>
  );
}
