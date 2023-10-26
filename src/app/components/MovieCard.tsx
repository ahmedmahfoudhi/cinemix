import React from "react";
import Image from "next/image";
import { IMovieResponse } from "../../../interfaces/movies.interface";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";

export default function MovieCard(movie: IMovieResponse) {
  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 group cursor-pointer">
      <Image
        src={`${BASE_IMAGE_URL}${movie.backdrop_path || movie.poster_path}`}
        alt=""
        height={1080}
        width={1920}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{movie.overview}</p>
        <h2
          className="mt-1 text-2xl text-whit group-hover:font-bold transition-all duration-100 
        ease-in-out"
        >
          {movie.name || movie.title || movie.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {movie.media_type && `${movie.media_type}`}{" "}
          {movie.release_date || movie.first_air_date}{" "}
          <HandThumbUpIcon className="h-5 mx-2" /> {movie.vote_count}
        </p>
      </div>
    </div>
  );
}
