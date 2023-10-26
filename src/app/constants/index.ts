import { BoltIcon, CheckBadgeIcon, HomeIcon, MagnifyingGlassIcon, RectangleStackIcon, UserIcon } from "@heroicons/react/24/outline";
import { IMoviesGenres, ITrendingAndTopRatedMovies } from "../../../interfaces/movies.interface";

const API_KEY = process.env.API_KEY
export const headerItems = [
    {
        label: "Home",
        Icon: HomeIcon
    },
    {
        label: "Trending",
        Icon: BoltIcon
      
    },
    {
        label: "Verified",
        Icon: CheckBadgeIcon
    },
    {
        label: "Collections",
        Icon: RectangleStackIcon
    },
    {
        label: "Search",
        Icon: MagnifyingGlassIcon
    },
    {
        label: "Account",
        Icon: UserIcon
    },
];

export const trendingAndTopRatedMovies: ITrendingAndTopRatedMovies[] = [
    {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
        key: 'getTrending',
    },
    {
        title: 'Top rated',
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
        key: 'getTopRated',
    },
]

export const moviesGenres: IMoviesGenres[] = [
    {
        title: 'Action',
        genreId: 28,
        key: 'getAction',
    },
    {
        title: 'Comedy',
        genreId: 35,
        key: 'getComedy',
    },
    {
        title: 'Horror',
        genreId: 27,
        key: 'getHorror',
    },
    {
        title: 'Romance',
        genreId: 10749,
        key: 'getRomance',
    },
    {
        title: 'Mystery',
        genreId: 9648,
        key: 'getMystery',
    },
    {
        title: 'Science Fiction',
        genreId: 878,
        key: 'getScienceFiction',
    },
    {
        title: 'Western',
        genreId: 37,
        key: 'getWestern',
    },
    {
        title: 'Animation',
        genreId: 16,
        key: 'getAnimation',
    },
    {
        title: 'Tv Movie',
        genreId: 10770,
        key: 'getTvMovie',
    },
]

export const getApiUrl = (genreId: number): string => `/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`